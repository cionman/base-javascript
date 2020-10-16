// 014 배열 요소의 삭제

const arr = [1, 2, 3, 4, 5];
delete arr[1];

console.log(arr);// [ 1, <1 empty item>, 3, 4, 5 ]
console.log(arr.length); // 5, 길이가 변화하지 않는다.

/*
희소 배열을 만들지 않고 배열의 특정요소를 완전히 삭제 하려면 Array.prototype.splice 메서드를 사용한다.
arr[2]부터 2개를 제거
 */
arr.splice(2, 2);
console.log(arr);  // [ 1, <1 empty item>, 5 ]
console.log(arr.length); // 3