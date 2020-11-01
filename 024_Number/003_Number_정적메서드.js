//003 Number 정적메서드
/*
    1. Number.isFinite
    - ES6에서 도입
     - 인수로 전달된 숫자 값이 정상적인 유한수인지 확인
     - 즉, Infinity 또는 -Infinity가 아닌지 검사하여 불리언 값을 반환
 */

console.log(Number.isFinite(0)); //true
console.log(Number.isFinite(Number.MAX_VALUE)); //true
console.log(Number.isFinite(Number.MIN_VALUE)); //true

console.log(Number.isFinite(Number.POSITIVE_INFINITY)); //false
console.log(Number.isFinite(Number.NEGATIVE_INFINITY)); //false

/*
    - Number.isFinite 메서드는 빌트인 전역함수 isFinite와 차이가 있다.
    - 빌트인 전역함수 isFinite는 전달받은 인수를 암묵적 타입 변환하여 검사를 수행하지만
     Number.isFinite는 전달 받은 인수를 숫자로 암묵적인 타입 변환하지 않는다.
    - Number.isFinite에 숫자가 아닌 인수가 전달되면 반환값은 언제나 false다.
 */
console.log(Number.isFinite(null)); //false
console.log(isFinite(null)); //true

/*
    2. Number.isNaN
     - ES6에서 도입
     - 인수로 전달된 숫자값이 NaN인지 검사하여 결과를 불리언 값으로 반환
     - 전달 받은 인수를 숫자로 암묵적인 타입 변환하지 않는다.
     - 숫자가 아닌 인수가 전달되면 반환값은 언제나 false다.
 */
console.log(Number.isNaN(NaN)); // true

//인수를 암묵적으로 타입변환하지 않는다.
console.log(Number.isNaN(undefined)); // false
console.log(isNaN(undefined)); // true

/*
    3. Number.isSafeInteger
     - ES6에서 도입
     - 안전한 정수인지 검사하여 불리언 값으로 반환한다.
 */
console.log(Number.isSafeInteger(0)); //true
console.log(Number.isSafeInteger(1000000000000000)); //true
console.log(Number.isSafeInteger(10000000000000001)); //false
console.log(Number.isSafeInteger(0.5)); //false, 정수가 아니다.
console.log(Number.isSafeInteger('123')); //false, 타입변환하지 않는다.


