// 005 isFinite
/*
    - 전달받은 인수가 정상적이 유한수인지 검사하여 유한수이면 true를 반환하고,
    무한수면 false를 반환한다.
    - 전달 받은 인수가 숫자가 아닌 경우 숫자타입을 변환한 후 검사를 수행한다.
 */

console.log(isFinite(0)); //true
console.log(isFinite(2e64)); //true
console.log(isFinite('10')); //true
console.log(isFinite(null)); //true

console.log(isFinite(Infinity)); //false
console.log(isFinite(-Infinity)); //false
console.log(isFinite(NaN)); //false
console.log(isFinite('Hello')); //false
console.log(isFinite('2009/09/01')); //false