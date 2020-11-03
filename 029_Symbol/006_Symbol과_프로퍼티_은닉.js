// 006 심벌과 프로퍼티 은닉
/*
    - 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for in 문이나 Object.keys, Object.getOwnPropertyNames메서드로 찾을 수 없다.
    - 심벌 값을 프로퍼티 키로 사용하여 프로퍼티를 생성하면 외부에 노출할 필요가 없는 프로퍼티를 은닉 할 수 있다.
 */

const obj = {
    // 심벌 값으로 프로퍼티 키를 생성
    [Symbol('mySymbol')]: 1
};

for (const key in obj) {
    console.log(key); //아무것도 출력되지 않는다.
}

console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []

// 프로퍼티를 완전하게 숨길수 있는 것은 아니다.
// ES6에서 도입된 Object.getOwnPropertySymbols메서드를 사용하면 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티를 찾을 수 있다.

// 전달된 객체의 심벌 프로퍼티 키를 배열로 반환한다.
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(mySymbol) ]

const symbolKey = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey]); //1

