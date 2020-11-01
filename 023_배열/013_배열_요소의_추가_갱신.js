// 013 배열 요소의 추가 갱신

const vArray = [0];
vArray[1] = 1;
console.log(vArray);
console.log(vArray.length);

/*
 현재 배열의 length 프로퍼티 보다 큰 인덱스로 값을 추가하면 희소 배열이된다.
 */
vArray[100] = 100;
console.log(vArray);

vArray[1] = 10;
console.log(vArray);

/*
 인덱스는 요소의 위치를 나타내므로 반드시 0이상의 정수를 사용해야한다. 만약 정수 이외의 값을 인덱스 처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.
 이 때 프로퍼티는 length 프로퍼티에 영향을 주지 않는다.
 */
const arr = [];
arr[0] = 1;
arr['1'] = 2;

console.log(arr); //[ 1, 2 ]
console.log(arr.length);

arr['foo'] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;
console.log(arr); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]
console.log(arr.length);

/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  length: { value: 2, writable: true, enumerable: false, configurable: false },
  foo: { value: 3, writable: true, enumerable: true, configurable: true },
  bar: { value: 4, writable: true, enumerable: true, configurable: true },
  '1.1': { value: 5, writable: true, enumerable: true, configurable: true },
  '-1': { value: 6, writable: true, enumerable: true, configurable: true }
}
 */
console.log(Object.getOwnPropertyDescriptors(arr));