// 003 이터레이터
/*
    - 이터러블의 Symbol.iterator 메서드를 호출 하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
    - 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 반드시 next 메서드를 갖는다.
 */

const array = [3, 4, 5];

//Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]();

//Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
console.log('next' in iterator); // true

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// value프로퍼티는 현재 순회중인 이터러블의 값,  done 프로퍼티는 이터러블의 순회 완료 여부를 나타낸다.