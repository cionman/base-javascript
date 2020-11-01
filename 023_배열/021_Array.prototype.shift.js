// 021 Array.prototype.shift
// 원본 변경

const arr = [3, 1, 2];
// 원본에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.

let result = arr.shift(); //3
console.log(result);
console.log(arr); // [1,2]

