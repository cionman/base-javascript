// 006 isNaN
/*
    - 전달 받은 인수가 NaN인지 검사하여 결과를 불리언 타입으로반환
    - 인수가 숫자가 아닌경우 숫자로 변환한 후 검사
 */


console.log(isNaN(10)); //false
console.log(isNaN('10')); //false
console.log(isNaN('10.12')); //false
console.log(isNaN('')); //false 0
console.log(isNaN(' ')); //false 0
console.log(isNaN(true)); //false 1
console.log(isNaN(null)); //false 0

console.log(isNaN(NaN)); //true
console.log(isNaN('blabla')); //true
console.log(isNaN({})); //true
console.log(isNaN(undefined)); //true

console.log(isNaN(new Date())); //false
console.log(isNaN(new Date().toString())); //true






