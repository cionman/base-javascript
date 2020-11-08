// 010 프로토타입 체인
/*
    - 프로토타입 Person.prototype에 프로퍼티를 추가하여 하위(자식) 객체가 상속받을 수 있도록 구현 해보자.
    - 프로토타입은 객체다. 일반 객체와 같이 프로토타입에도 프로퍼티를 추가/삭제할 수 있다.
    그리고 이렇게 추가/삭제된 프로퍼티는 프로토타입 체인에 즉각 반영된다.
    - Person 생성자 함수를 통해 생성된 모든 객체는 프로토타입에 추가된 sayHello메서드를 생속받아 자신의 메서드
    처럼 사용할 수 있다.

 */

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
};

const me = new Person('Lee');
const you = new Person('Kim');

console.log(me.hasOwnProperty('name')); //true

/*
    - Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메서드인 hasOwnProperty를 호출할 수 있다.
    - 이것은 me 객체가 Person.prototype 뿐만 아니라 Object.prototype도 상속받았다는 것을 의미한다.
    - me 객체의 프로토타입은 Person.prototype 이다.
 */
console.log(Object.getPrototypeOf(me) === Person.prototype); // true

//Person.prototype의 프로토타입은 Object.prototype 이다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

/*
    - 자바스크립트는 객체의 프로퍼티(메서드포함) 에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면
    [[Prototype]] 내부슬롯의 참조를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.
    - 이를 프로토타입 체인이라고 한다.
    - 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 매커니즘이다.
 */

console.log(me.hasOwnProperty('name')); //trye

/*
    위 예제 me.hasOwnProperty('name') 과 같이 메서드를 호출하면 자바스크립트 엔진은 다음과 같은 과정을 거쳐 메서드를 검색한다.
    프로퍼티도 마찬가지다.

    1. 먼저 hasOwnProperty 메서드를 호출한 me 객체에서 hasOwnProperty메서드를 검색한다.
     me객체에는 hasOwnProperty메서드가 없으므로 프로토타입 체인을 따라, 다시말해 [[Prototype]] 내부 슬롯에 바인딩
     되어있는 프로토타입(위 예제의 경우 Person.prototype)으로 이동하여 hasOwnProperty 메서드를 검색한다.

     2. Person.prototype에도 hasOwnProperty 메서드가 없으므로 프로토타입 체인을 따라, 다시말해 [[Prototype]] 내부
     슬롯에 바인딩되어 있는 프로토타입(위 예제의 경우 Object.prototype)으로 이동하여 hasOwnProperty 메서드를 검색한다.

     3. Object.prototype에는 hasOwnProperty 메서드가 존재한다. 자바스크립트 엔진은 Object.prototype.hasOwnProperty메서드를 호출한다.
     이때 Object.prototype.hasOwnProperty메서드의 this에는 me 객체가 바인딩 된다.
 */

console.log(Object.hasOwnProperty.call(me, 'name')); //true

/*
    call 메서드
    - call 메서드는 this로 사용할 객체를 전달하면서 함수를 호출한다.
    - 위 예제 this로 사용할 me객체를 전달하면서 Object.prototype.hasOwnProperty서드를 호출한다고 이해하자
 */


/*
    - 프로토타입 체인의 최상위에는 언제나 Object.prototype이다.
    - 따라서 모든 객체는 Object.prototype을 생속 받는다.
    - Object.prototype을 프로토타입 체인의 종점 이라한다.
    - Object.prototype에서도 프로퍼티를 검색할 수 없는 경우는 undefined를 반환한다.

    - 프로토타입 체인은 상속과 프로퍼티 검색을 위한 매커니즘이다.
    - 이에 반해 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다.
    - 자바스크립트 엔진은 함수의 중첩관계로 이루어진 스코프의 계층적 구조에서 식별자를 검색한다.
    - 스코프체인은 식별자 검색을 위한 매커니즘이다.

    - 위 예제의 경우 스코프체인에서 me 식별자를 검색한다. me 식별자는 전역에 선언되었으므로 전역 스코프에서 검색된다.
    - me를 검색한다음, me객체의 프로토타입 체인에서 hasOwnProperty메서드를 검색한다.
    - 이처럼 스코프 체인과 프로토타입 체인은 서로 연관 없이 별도로 동작하는 것이 아니라
    서로 협력하여 식별자와 프로퍼티를 검색하는데 사용된다.

 */