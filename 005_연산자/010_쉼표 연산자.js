// 010 쉼표 연산자
/*
   - 쉼표 연산자는 왼쪽 피연산자 부터 차례대로 피연산자를 평가하고 마지막 피연산자의 결과가 트나면 마지막 피연산자의 평가 결과를 반환한다.

 */

var x, y, z;
var result;
result = (x = 1, y = 2 , z = 3);

console.log(result); // 3