// __proto__ 접근자 프로퍼티

//다음을 크롬 브라우저 콘솔에 출력해보자

const person = { name: 'Lee' };

/*
    name: "Lee"
    __proto__:
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
 */
/*
    1. __proto__ 접근자 프로퍼티다.
    - 내부 슬롯은 프로퍼티가 아니다.
    - 원칙적으로 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않는다.
    - 단 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
    - [[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며 __proto__ 접근자 프로퍼티를 통해 간접적으로 [[Prototype]]
    내부슬롯의 값, 즉 프로토타입에 접근할 수 있다.
 */

const obj = {};
const parent = { x: 1 };

//getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

//setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.x); //1

/*
    2. __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.

    - __proto__ 접근자 프로퍼티는 객체가 직접 소요하는 프로퍼티가 아니라 Object.prototype의 프로퍼티다.
    - 모든 객체는 상속을 통해 Object.__proto__ 접근자 프로퍼티를 사용할 수 있다.
 */
console.log(person.hasOwnProperty('__proto__')); //false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__ 를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); //true

/*
    3. __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
    - [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호 참조에의해
    프로토타입체인이 생성되는 것을 방지하기 위해서다.
 */
const parent2 = {};
const child2 = {};

//child의 프로토타입을 parent로 설정
child2.__proto__ = parent2;

//parent의 프로토타입을 child로 설정
//parent2.__proto__ = child2; // TypeError: Cyclic __proto__ value  순환 오류 발생
/*
    - 아무런 체크 없이 무조건 적으로 프로토타입을 교체할 수 없도록 __proto__ 접근자 프로퍼티를 통해 프로토 타입에 접근하고 교체하도록 구현되어 있다.
 */

/*
    4. __proto__ 접근자 프로퍼티를 코드내에서 직접 사용하는 것은 권장하지 않는다.
    - 코드내에서 __proto__ 접근자 프로퍼티를 직접 사용하는 것은 권장하지 않는다.
    - 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는 것은 아니기 때문이다.
    - 직접 상속을 통해 다음과 같이 Object.prototype을 상속받지 않는 객체를 생성할수도 있기 때문에 __proto__ 접근자 프로퍼티를
    사용할 수 없는 경우가 있다.

    - __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득 하고 싶은 경우 Object.getPrototypeOf 메서드를 사용하고,
    프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를 사용할 것을 권장한다.
    -
 */

const obj2 = Object.create(null);
console.log(obj2.__proto__); //undefined

// __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.

const obj3 = {};
const parent3 = { x: 1 };

console.log(Object.getPrototypeOf(obj3)); // {} // ES5 에서 도입

// obj3 객체의 프로토타입을 교체
Object.setPrototypeOf(obj3, parent3); // ES6에서 도입된 메서드

console.log(obj3.x);
