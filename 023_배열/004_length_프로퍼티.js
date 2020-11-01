// 004 length 프로퍼티와 희소배열

console.log([].length); //0
console.log([1, 2, 3].length); //3

/*
    length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
 */

const arr = [1, 2, 3];
console.log(arr.length); // 3
arr.push(4);
console.log(arr.length); // 4
arr.pop();
console.log(arr.pop()); // 3


