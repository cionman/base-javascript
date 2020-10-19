// 045 Array.prototype toString, toLocaleString

const arr = [1, 3, 5, 7];

/*
  둘다 배열의 요소를 문자열로 변환하여 쉼표로 연결한 문자열을 반환한다.

  toLocaleString은 해당지역에 맞는 언어로 지역화한 문자열로 변환한다.
 */

console.log(["A", "B", "C", new Date()].toString());
console.log(["A", "B", "C", new Date()].toLocaleString());
