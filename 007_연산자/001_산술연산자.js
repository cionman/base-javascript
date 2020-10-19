// 1.  정수 끼리 나누어도 결과가 부동 소수점이 된다.
console.log(7 / 2);

/*
  2. 나머지 연산자 %의 피 연산자는 부동소수점이다.

 */

console.log(15 % 4);
console.log(5 % 1.5);

// 3. + 연산자는 피연산자 중 하나가 문자열이면 나머지 피연산자를 문자열로 만든다.

console.log(1 + "2month");

/*
4. 계산할수 없는 경우에는 NaN으로 평가함
 */
console.log(0 / 0);
console.log("one" * 1);

/*
5. true 1, false  또는 null은 0
 */
console.log(true + true);
console.log(false + true);
console.log(1 + null);

// 6. undefined 면 NaN으로 평가함

