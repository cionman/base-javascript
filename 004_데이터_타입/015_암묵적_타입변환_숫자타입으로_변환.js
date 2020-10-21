// 015 암묵적 타입변환 - 숫자 타입으로 변환

/*
    - '+'가 아닌 산술연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 암묵적으로 숫자타입으로 변환한다.
    - 숫자 타입으로 변환할 수 없는 경우는 NaN이 된다.
 */

console.log(1 - '1');//0
console.log(2 * '10');//20
console.log(10 / '5');// 2
console.log(10 / 'two');// NaN

/*
    - 크기를 비교하는 > < 연산자 또한 문맥상 숫자를 요구하므로 암묵적으로 숫자변환을 실행한다.
 */

console.log('1' > 0); // true

/*
    - '+' 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적으로 타입변환한다.
 */

// 문자열 타입
console.log(+''); // 0
console.log(+'0'); // 0
console.log(+'1'); // 1
console.log(+'str'); // NaN

//불리언 타입
console.log(+true); // 1
console.log(+false); // 0

//null 타입
console.log(+null); //0

//undefined 타입
console.log(+undefined); //NaN
//console.log(+(Symbol())); // TypeError: Cannot convert a Symbol value to a number

console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10, 20]); // NaN
console.log(+(function () {
})); // NaN