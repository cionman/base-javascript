// 012 배열 요소의 참조

const arr = [1, 2];

console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); //undefined

const arr2 = [1, , 3];
console.log(arr2[1]); //undefined
console.log(arr2[3]); //undefined

/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
 */
console.log(Object.getOwnPropertyDescriptors(arr2));

