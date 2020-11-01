// 018 Array.prototype.push
// 원본 변경
const arr = [1, 2];

let result = arr.push(3, 4);

// 인수로 전달 받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
console.log(result); //4

// push 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 2, 3, 4]


//arr.push(3) 과 동일한 처리를 한다. 이방법이 push메서드 보다 빠르다.
arr[arr.length] = 3;
console.log(arr); //[1, 2, 3, 4, 3]

/*
   push 메서드는 원본 배열을 직접 변경하는 부수효과가 있다. 따라서 push 메서드 보다 ES6의 스프레드 문법을 사용하는 편이 좋다.
 */

const newArr = [...arr, 3];
console.log(newArr); //[1, 2, 3, 4, 3, 3]