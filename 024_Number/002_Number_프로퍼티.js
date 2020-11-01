//002 Number 프로퍼티

/*
    1. Number.EPSILON
    - ES6에서 도입
    - 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다.
    - 2.220446049250313 ... * 10^-16 이다.
    - Number.EPSILON는 부동 소수점으로 인해 발생하는 오차를 해결하기 위해 사용한다.
 */
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

// Number.EPSILON는 부동 소수점으로 인해 발생하는 오차를 해결하기 위해 사용한다.
// Number.EPSILON을 사용하여 부동소수점을 비교하는 함수다.
function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3)); // true

/*
    2. Number.MAX_VALUE
    - 자바스크립트에서 표현할 수 있는 가장 큰 양수 값(1.79769313482623157 * 10^38) 이다.
    - Number.MAX_VALUE 보다 큰 숫자는 Infinity 다.
 */
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MAX_VALUE < Infinity); // true


/*
    3. Number.MIN_VALUE
    - 자바스크립트에서 표현할 수 있는 가장 작은 양수 값(5e-324) 이다.
    - Number.MAX_VALUE 보다 작은 숫자는 0 이다.
 */
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MIN_VALUE > 0); // true

/*
    4. Number.MAX_SAFE_INTEGER
    - 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수 값(9007199254740991)이다.
 */
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991


/*
    5. Number.MIN_SAFE_INTEGER
    - 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수 값(-9007199254740991)이다.
 */
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

/*
    6. Number.POSITIVE_INFINITY
    - 양의 무한대를 나타내는 숫자값 Infinity와 같다.
 */
console.log(Number.POSITIVE_INFINITY); //Infinity


/*
    7. Number.NEGATIVE_INFINITY
    - 음의 무한대를 나타내는 숫자값 -Infinity와 같다.
 */
console.log(Number.NEGATIVE_INFINITY); //-Infinity

/*
    8. Number.NaN
    - Not a Number
 */
console.log(Number.NaN); //NaN
