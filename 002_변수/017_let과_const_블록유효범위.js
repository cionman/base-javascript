/*

- let 과 const는 ECMAScript 6부터 추가된 변수 선언자로 모두가 블록 유효 범위를 갖는 변수를 선언
- 블록 유효범위는 중괄호 안에서만 유효함
- let 은 일반 변수 선언과 할당
- const는 한번만 할당할 수 있는 상수를 선언
 */

let x;
let a, b, c;
let y = 5, z = 10;
/*

console.log(k) // Reference Error
let k = 5;
*/

/*
// 똑같은 변수를 선언하면 SyntaxError: Identifier 't' has already been declared
let t;
let t;
*/


// const는 선언과 동시에 할당

const p = 2;
//p = 3; // 선언 후 다시 할당하면 에러 발생
/*
 선언한 상수 값은 수정할 수 없지만, 상수 값이 객체이거나 배열일 경우 프로퍼티 또는 프로퍼티 값은 수정할 수 있다.
 */
const origin = { x: 1, y: 2 };
origin.x = 10;
console.log(origin);



