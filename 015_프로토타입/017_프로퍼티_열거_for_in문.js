// 017 프로퍼티 열거
/*
    1. for.. in문

    - 객체의 모든 프로퍼티를 순회하며 열거하려면 for .. in문을 사용한다.
    - for in문은 변수 선언문에 프로퍼티 키를 할당한다.
    - for in문은 in 연산자 처럼 순회 대상 객체의 프로퍼티 뿐만 아니라
    상속 받은 프로토타입의 프로퍼티까지 열거한다.
    - 하지만 toString 과 같은 Object.prototype의 프로퍼티가 열거되지는 않는다.
    - for in 문은 객체의 프로토타입 체인상에 존재하는 모든 프로토타입의 프로퍼티 중에서
    프로퍼티 어트리뷰트[[Enumerable]] 의 값이  true인 프로퍼티를 순회하며 열거한다.  (Object.prototype의 프로퍼티는 [[Enumerable]]이 false다.)
    - 키가 심벌인 프로퍼티는 열거하지 않는다.
    - for in문은 프로퍼티를 열거할 때 순서를 보장하지 않으므로 주의가 필요하다.
    (대부분 모던 브라우저는 순서를 보장하고 숫자인 프로퍼티 키에 대해서는 정렬을 실시한다.)

    for(변수 선언문 in 객체)
 */

const person = {
    name: 'Lee',
    address: 'Seoul'
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in person); // true

// for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
// 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
for (const key in person) {
    console.log(key + ': ' + person[key]);
}

// name: Lee
// address: Seoul


// 키가 심벌인 프로퍼티는 열거하지 않는다.
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const key in obj) {
    console.log(key + ': ' + obj[key]);
}
// a: 1