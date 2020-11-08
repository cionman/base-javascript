// 014 직접 상속
/*
    1. Object.create에 의한 직접 상속

    - Object.create 메서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다.
    - Object.create 메서드도 다른 객체 생성방식과 마찬가지로 추상연산 OrdinaryObjectCreate 를 호출한다.
    - Object.create 메서드의 첫번째 매개변수는 생성할 객체의 프로토타입으로 지정할 객체를 전달한다.
    - Object.create 메서드의 두번째 매개변수는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달한다.
    이 객체의 형식은 Object.defineProperties 메서드의 두번째 인수와 동일하다.

    Object.create 메서드의 장점
    - new 연산자 없이도 객체를 생성할 수 있다.
    - 프로토타입을 지정하면서 객체를 생성할 수 있다.
    - 객체리터럴에 의해 생성된 객체도 상속 받을 수 있다.

 */


// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj → null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다.
//console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj → Object.prototype → null
// obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj → Object.prototype → null
// obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
});
// 위 코드는 다음과 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj → myProto → Object.prototype → null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
    this.name = name;
}

// obj → Person.prototype → Object.prototype → null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

/*
    2. 객체 리터럴 내부에서 __proto__ 에 의한 직접 상속
 */

const myProto2 = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj2 = {
    y: 20,
    // 객체를 직접 상속받는다.
    // obj → myProto → Object.prototype → null
    __proto__: myProto2
};
/* 위 코드는 아래와 동일하다.
const obj = Object.create(myProto, {
  y: { value: 20, writable: true, enumerable: true, configurable: true }
});
*/

console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) === myProto); // true