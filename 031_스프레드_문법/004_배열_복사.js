// 004 배열 복사

//ES 5에서 배열을 복사하려면 slice 메서드를 사용한다.
var origin = [1, 2];
var copy = origin.slice();

console.log(copy); //[1, 2]
console.log(copy === origin); //false

//ES6
const origin2 = [1, 2];
const copy2 = [...origin2];

console.log(copy2); //[1, 2]
console.log(copy2 === origin); //false