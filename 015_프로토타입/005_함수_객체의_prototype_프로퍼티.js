// 005 함수 객체의 prototype 프로퍼티
/*
    - 함수 객체 만이 소유하는 prototype프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
 */

// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function () {
}).hasOwnProperty('prototype')); //true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(({}).hasOwnProperty('prototype'));//false

/*
    - prototype 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다.
    - 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 ES6 메서드 축약표현으로 정의한
    메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

 */

const Person = name => {
    this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype')); //false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); //undefined

//ES6 메서드 축약표현으로 정의한 메서드 또한 non-constructor 다.
const obj = {
    foo() {

    }
};

console.log(obj.foo.hasOwnProperty('prototype')); //false
console.log(obj.foo.prototype); //undefined

/*
    - 생성자 함수로 호출하기 위해 정의하지 않은 일반 함수(함수선언문, 함수 표현식) 도 prototype 프로퍼티를 소유하지만
    객체를 생성하지 않는 일반 함수의 prototype 프로퍼티는 아무런 의미가 없다.
    - 모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype으로 부터 상속받은) __proto__ 접근자 프로퍼티와
    함수 객체만이 가지고 있는 prototype프로퍼티는 결국 동일한 프로토타입을 가리킨다.

    __proto__ 접근자 프로퍼티 :
        - 소유 : 모든객체
        - 값 : 프로로토타입 참조
        - 사용주체 : 모든 객체
        - 사용목적  : 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용

    prototype프로퍼티 :
        - 소유 : constructor
        - 값 : 프로토타입 참조
        - 사용주체 : 생성자 함수
        - 사용목적 : 생성자 함수가 자신이 생성할 객체 인스턴스의 프로토타입을 할당하기 위해 사용

 */

function Person2(name) {
    this.name = name;
}

const me = new Person2('lee');
console.log(Person2.prototype === me.__proto__); //true