// 039 Array.prototype.some

/*
 콜백함수의 반환값이 단 한번이라도 참이면 true, 모두 거짓이면 false
 */

console.log([5, 10, 15].some(item => item > 10)); //true
console.log([5, 10, 15].some(item => item < 0)); //false
console.log([].some(item => item < 0)); //빈배열은 언제나 false
