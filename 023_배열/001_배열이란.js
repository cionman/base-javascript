// 001 배열 이란

const arr = ['apple', 'banana', 'orange'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.length);

/*
  배열은 인덱스와 length 프로퍼티를 갖기 때문에 for문을 통해 순차적으로 접근 할 수 있다.
 */

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

