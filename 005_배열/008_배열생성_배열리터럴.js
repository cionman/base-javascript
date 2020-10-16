// 008 배열생성 배열리터럴

const arr1 = [1, 2, 3];
console.log(arr1.length); //3

const arr2 = [];
console.log(arr2.length); //0

const arr3 = [1, , 3];
console.log(arr3.length); // 3
console.log(arr3); //[ 1, <1 empty item>, 3 ]
console.log(arr3[1]); // undefined

