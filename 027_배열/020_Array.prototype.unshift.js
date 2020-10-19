// 020 Array.prototype.unshift
// 원본 변경

const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.

let result = arr.unshift(3, 4);
console.log(result); // 4
console.log(arr); // [3, 4, 1, 2]

//ES6 스프레드 문법
const newArr = [3, ...arr];
console.log(newArr); // [3, 3, 4, 1, 2]