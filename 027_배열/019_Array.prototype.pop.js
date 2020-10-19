// 019 Array.prototype.pop
// 원본 변경

const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.pop();

// pop 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1]