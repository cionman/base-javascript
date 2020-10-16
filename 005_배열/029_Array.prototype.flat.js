// 029 Array.prototype.flat
// 원본 유지
/*
    ES10(ECMAScript 2019)에서 도입된 flat메서드는 인수로 전달한 깊이 만큼 재귀적으로 배열을 평탄화 한다.
 */

const arr = [1, [2, 3, 4, 5]];
console.log(arr.flat());
console.log(arr);

/*
  - 중첩 배열을 평탄화 할 깊이를 인수로 전달할 수 있다.
  - 인수를 생략할 경우 기본 값은 1이다.
  - 인수로 Infinity를 전달하면 모든 중첩 배열은 모두를 평탄화한다.
 */
console.log([1, [2, [3, [4]]]].flat()); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log([1, [2, [3, [4]]]].flat(1)); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log([1, [2, [3, [4]]]].flat(2)); // [ 1, 2, 3, [ 4 ] ]
console.log([1, [2, [3, [4]]]].flat().flat()); // [ 1, 2, 3, [ 4 ] ]
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [ 1, 2, 3, 4 ]