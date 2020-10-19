// 006 Object.is

/*
    - 앞서 살펴본 동등비교와 일치비교에서 +0과 -0을 동일하다고 평가한다. 또한 동일한 NaN을 비교하면 다른 값이라고 평가한다.
    - es6에서 도입된 Object.is메서드는 다음과 같이 예측가능한 정확한 비교 결과를 반환한다.
*/

console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true