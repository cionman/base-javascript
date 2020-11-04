// 002 이터러블

/*
    - 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.(이터러블 프로토콜은 001_이터레이션_프로토콜.js 참조)
    - 이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속 받은 객체를 말한다.
 */

// 이터러블인지 확인하는 함수는 다음과 같이 구현할 수 있다.

const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열, Map, Set 등은 이터러블이다.
console.log(isIterable([]));        // -> true
console.log(isIterable(''));        // -> true
console.log(isIterable(new Map())); // -> true
console.log(isIterable(new Set())); // -> true
console.log(isIterable({}));        // -> false

// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.

const array = [1, 2, 3];

// 배열은 Array.prototype.의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in array); //true

// 이터러블인 배열은 for of 문으로 순회 가능하다.
for (const item of array) {
    console.log(item); // 1 2 3
}

// 이터러블 배열은 스프레드 문법의 대상이다.
console.log([...array]); // [ 1, 2, 3 ]

// 이터러블인 배열은 디스트럭처링 대상으로 사용할 수 있다
const [a, ...rest] = array;
console.log(a, rest); // 1, [2, 3]

/*
    - Symbol.iterator 메서드를 직접 구현하지 않거나 상속받지 않은 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
    - 일반 객체는 for of 문으로 순회할 수 없으며, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
 */

const obj = { a: 1, b: 2 };
console.log(Symbol.iterator in obj); //false

/*
// TypeError: obj is not iterable
for (const item of obj) {
    console.log(item);
}*/

// 이터러블이 아닌 일반 객체는 디스트럭처링 할당의 대상으로 사용할 수 없다.
//const [c, d] = obj; //TypeError: obj is not iterable

/*
    - 2020년 7월 현재 TC39 프로세스의  stage 4단계에 제안되어 있는 스프레드 프로퍼티 제안은
    - 일반 객체에 객체 리터럴 내부에서 스프레드 문법 사용을 허용한다.
 */

console.log({ ...obj }); // { a: 1, b: 2 }
