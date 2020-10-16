// 006 length 프로퍼티의 값보다 큰값을 할당하면 빈값을 늘린다

const arr = [1];
arr.length = 3;

console.log(arr.length); //3
console.log(arr); // [ 1, <2 empty items> ]

/*
   length 프로퍼티 값은 변경되지만 실제 배열에는 변함이 없다.
   {
      '0': { value: 1, writable: true, enumerable: true, configurable: true },
      length: { value: 3, writable: true, enumerable: false, configurable: false }
    }
 */
console.log(Object.getOwnPropertyDescriptors(arr));





