// 10 배열생성 Array.of

/*
  ES6에서 추가, 요소가 1개면서 숫자더라도 해당 인수를 갖는 배열을 생성한다.
 */

console.log(Array.of(1));// [ 1 ]
console.log(Array.of(1, 2, 3));// [ 1, 2, 3 ]
console.log(Array.of('String', {})); // [ 'String', {} ]