// 038 Array.prototype.reduce - 중첩 배열 평탄화
// 원본 유지

/*
 - reduce 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달 받은 콜백함수를 반복 호출한다.
 - 콜백함수의 반환값을 다음 순회시에 콜백 함수의 첫번째 인수로 전달하면서 콜백함수를 호출 하여 하나의 결과값을 만든다.
 - 원본배열은 유지된다.
 - 콜백함수와 초기값을 파라미터로 받는다.
 - 콜백함수 인자는 4개, 누적값, 현재값, 인덱스, 배열전체(this)

 Array.prototype.reduce((accumulator,currentValue, index, array))
 */

const values = [1, [2, 3], 4, [5, 6]];
const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten); //[ 1, 2, 3, 4, 5, 6 ]
/*
 ES2019에 도입된 flat을 활용하는 것이 더 직관적이다.
 */

