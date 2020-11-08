// 012 프로토타입의 교체
/*
    - 프로토타입은 임의의 다른 객체로 변경할 수 있다.
    - 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다.
    - 이러한 특징을 활용하여 객체간의 상속관계를 동적으로 변경할 수 있다.
    - 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.
 */

/*
    1. 생성자 함수에 의한 프로토타입의 교체
 */
const Person = (function () {

    //생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 1. 생성자 함수와 prototype프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        sayHello() {
            console.log(`Hi My name is ${this.name}`);
        }
    };

    //생성자 함수 반환
    return Person;
}());

const me = new Person('Lee');

/*
    - 위예제 1. 에서 Person.prototype에 객체 리터럴을 할당했다. 이는 Person 생성자 함수가 생성할 객체의 프로토타입을
    객체 리터럴로 교체한 것이다.

    - 프로토타입으로 교체한 객체리터럴에는 constructor 프로퍼티가 없다.
    - constructor 프로퍼티는 자바스크립트 엔진이 프로토타입을 생성할때 암묵적으로 추가한 프로퍼티다.
    - me 객체의 생성자 함수를 검색해보면 Person이 아니라 Object가 나온다.
 */
console.log(me.constructor === Person); //false
console.log(me.constructor === Object); //true

/*
    - 이처럼 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수간의 연결이 파괴된다.
    - 프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가하여 프로토타입을 되살린다.
 */


const Person2 = (function () {

    //생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 1. 생성자 함수와 prototype프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {

        //constructor 프로퍼티와 생성자 함수간의 연결을 설정
        constructor: Person,
        sayHello() {
            console.log(`Hi My name is ${this.name}`);
        }
    };

    //생성자 함수 반환
    return Person;
}());

const me2 = new Person2('Lee');
console.log(me2.constructor === Person2); //true
console.log(me2.constructor === Object); //false

/*
    2. 인스턴스에 의한 프로토타입의 교체
    - __proto__ 접근자 프로퍼티 또는 Object.setPrototypeOf 메서드를 통해 프로토타입을 교체할 수 있다.
 */

function Person3(name) {
    this.name = name;
}

const me3 = new Person3('Lee');

const parent = {
    sayHello() {
        console.log(`Hi Person3 method My name is ${this.name}`);
    }
};

Object.setPrototypeOf(me3, parent);

me3.sayHello(); // Hi Person3 method My name is Lee
console.log(me3.constructor === Person3); // false
console.log(me3.constructor === Object); // true

/*
    - 이처럼 프로토타입 교체를 통해 객체간의 상속관계를 동적으로 변경하는 것은 꽤 번거롭다.
    - 프로토타입은 직접 교체하지 않는 것이 좋다.
    - 차후 살펴볼 직접 상속 이 더 편리하고 안전하다.
    - 또는 ES6에서 도입된 클래스를 사용하면 간편하고 직관적으로 상속 관계를 구현할 수 있다.
 */
