// 002 Symbol 함수

/*
    - Symbol 함수는 new 연산자와 함께 호출 하지 않는다.
 */

const mySymbol = Symbol();
console.log(typeof mySymbol); //symbol

//심볼 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); //Symbol()

// new Symbol(); //TypeError: Symbol is not a constructor
/*
    - Symbol 함수에는 선택적으로 문자열을 인수로 전달할 수 있다.
    - 심벌 값에 대한 설명(description)으로 디버깅 용도로만 사용되며, 심벌값 생성에 어떠한 영향도 주지 않는다.
    - 심벌 값에 대한 설명이 같더라도 생성된 심벌 값은 유일무이한 값이다.
 */

const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); //false

// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다.

//console.log(mySymbol + ''); // TypeError: Cannot convert a Symbol value to a string
//console.log(+mySymbol); // TypeError: Cannot convert a Symbol value to a number

// 단 불리언 타입으로 암묵적으로 타입 변환 된다.

console.log(!!mySymbol); // true
if (mySymbol) console.log('mySymbol is not empty');

