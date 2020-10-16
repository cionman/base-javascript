// 027 Array.prototype.includes

/*
 ES7에서 도입된 includes 메서드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다.
 */

const arr = [1, 2, 3];

console.log(arr.includes(2)); //true
console.log(arr.includes(100)); //false

// 두번째 인수로 검색을 시작할 인덱스를 지정할 수 있다.
console.log(arr.includes(1, 1)); // false

// 배열 요소에 3이 포함되어 있는지 인덱스 2부터 확인한다.
console.log(arr.includes(3, -1)); // true

// indexOf는  NaN이 포함되어 있는지 확인할 수 없다.
console.log([NaN].indexOf(NaN) !== -1); // false

// includes는 확인할 수 있다.
console.log([NaN].includes(NaN)); //true
