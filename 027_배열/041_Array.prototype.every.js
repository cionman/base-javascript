// 040 Array.prototype.every

/*
 콜백함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false
 */

console.log([5, 10, 15].every(item => item > 3)); //true
console.log([5, 10, 15].every(item => item > 10)); //false
console.log([].every(item => item < 0)); //빈배열은 언제나 true