// 014 암묵적 타입변환 - 문자열 타입으로 변환

/*
    - '+' 연산자는 피연산자 중 하나 이상이 문자열 이므로 문자열 연결 연산자로 동작한다.
 */

// 숫자 타입
console.log(1 + '2'); //"12"
console.log('2' + 1 + 3); //"213"
console.log(1 + 2 + '3'); //"33"
console.log(0 + ''); // "0"
console.log(NaN + ''); // "NaN"
console.log(-Infinity + ''); // "-Infinity"

// 불리언 타입
console.log(true + ''); // "true"
console.log(false + ''); // "false"

// null 타입
console.log(null + ''); // "null"

//undefined
console.log(undefined + ""); //"undefined"

//symbol
//console.log((Symbol()) + ''); //TypeError: Cannot convert a Symbol value to a string

//객체 타입
console.log(({}) + ''); // "[object Object]"
console.log(Math + ''); // "[object Math]"
console.log((function () {
}) + ''); // "function () {}"

console.log(Array + ''); //function Array() { [native code] }

