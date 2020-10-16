// 025 Array.prototype.join
// 원본 유지
/*
 - join메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달 받은 문자열, 즉 구분자로 연결한 문자열을 반환한다.
 - 구분자는 생략가능하며 기본 구문자는 콤마다.
 */
const arr = [1, 2, 3, 4];
console.log(arr.join()); // 1,2,3,4
console.log(arr.join('')); // 1234
console.log(arr.join(':')); // 1:2:3:4
console.log(arr);

