console.log("Hello")
console.log("Hi")

/*
자바 스크립트 엔진은 위 코드를 아래와 같이 해석

console.log("Hello");
console.log("Hi");

*/

let a = 1
let b = 3
let x = 6
let y = 7

c = a + b
(x+y).toString()

/**
 이 코드에서 2번째 줄의(x + y)가 첫번째 줄의 b함수를 호출하는 코드라고 인식, 실행시 b is not a function 에러 발생

 c = a + b(x+y).toString(); 으로 해석한다.
 */

