// 022 Array.prototype.concat
// 원본 변경되지 않음

const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해제하여 새로운 배열의 요소로 추가한다.
// concat은 원본을 수정하지 않는다.
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(3);
console.log(result); // [1, 2, 3]

result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]

const arr = [3, 4];
arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr); //[ [ 1, 2 ], 3, 4, [ 5, 6 ] ]

// concat 메서드는 인수로 전달 받은 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result2 = [1, 2].concat([3, 4]);
result2 = result2.concat([5, 6]);
console.log(result2); // [ 1, 2, 3, 4, 5, 6 ]




