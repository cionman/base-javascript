// 007 __proto__ 접근자 프로퍼티

/*
    - 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는다.
    - [[Prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체르 가리킨다.
    - __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.
 */

const obj = { a: 1 };

//객체 리터럴 방식으로 생성한 객체의 프로토 타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); //true

console.log(obj.hasOwnProperty('a')); //true
console.log(obj.hasOwnProperty('__proto__')); //false