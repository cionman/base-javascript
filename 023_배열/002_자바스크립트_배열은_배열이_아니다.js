// 002 자바스크립트 배열은 배열이 아니다

/*
    배열이라는 타입이 존재하지 않음, 배열은 객체 타입
 */
const arr = ['apple', 'banana', 'orange'];
console.log(typeof arr); // object

/*
   배열은 배열 리터럴, Array생성자 함수, Array.of, Array.from 메서드로 생성할 수 있다.
 */

console.log(arr.constructor === Array); // true
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

/*
  배열은 객체지만 `값의 순서`와 `length 프로퍼티` 를 가진다.

  {
     '0': {    value: 'apple',    writable: true,    enumerable: true,    configurable: true  },
     '1': {    value: 'banana',    writable: true,    enumerable: true,    configurable: true  },
     '2': {    value: 'orange',    writable: true,    enumerable: true,    configurable: true  },
     length: { value: 3, writable: true, enumerable: false, configurable: false }
 }
 */
console.log(Object.getOwnPropertyDescriptors(arr));

/*
    자바스크립트 배열의 특징 장단점

    - 단점 : 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴수 밖에 없는 구조적 단점존재
    - 장점 : 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다
 */