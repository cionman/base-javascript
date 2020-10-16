// 009 배열생성 Array생성자함수

const arr = new Array(10);
console.log(arr); // [ <10 empty items> ]
console.log(arr.length); // 10
/*
{
  length: { value: 10, writable: true, enumerable: false, configurable: false }
}
 */
console.log(Object.getOwnPropertyDescriptors(arr));

// 배열 요소는 4294967295개 가질 수 있다.
console.log(new Array(4294967295));

//console.log(new Array(4294967296)) // RangeError: Invalid array length 에러 발생
// console.log(new Array(-1)) //RangeError: Invalid array length 에러 발생

// 전달된 인수가 없는 경우 빈 배열 생성
console.log(new Array()); //[]

// 전달된 인수가 2개이상이거나 숫자가 아닌경우 인수를 요소로 갖는 배열을 생성
console.log(new Array(1, 2, 3)); //[ 1, 2, 3 ]
console.log(new Array({})); //[ {} ]