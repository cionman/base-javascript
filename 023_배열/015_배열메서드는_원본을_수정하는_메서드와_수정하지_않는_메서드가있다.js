// 015 배열메서드는 원본을 수정하는 메서드와 수정하지 않는 메서드가있다

// 원본을 수정하는 메서드
const arr = [1];
arr.push(2);
console.log(arr); //[ 1, 2 ]

//원본을 수정하지 않는 메서드
const result = arr.concat(3);
console.log(arr);// [ 1, 2 ]
console.log(result);// [ 1, 2, 3 ]