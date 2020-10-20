// 004 할당 연산자

/*
  - 할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.
  - 할당 연산자는 좌항의 변수에 값을 할당하므로 변수 값이 변하는 부수효과가 있다.

  = : x = 5 : x= 5
  += : x += 5 : x = x + 5
  -= : x -= 5 : x = x - 5
  *= : x *= 5 : x = x * 5
  /= : x /= 5 : x = x / 5
  %= : x %= 5 : x = x % 5
  **= : x **= 5 : x= x ** 5
 */

var x;

x = 10;
console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

x *= 5;
console.log(x); // 50

x /= 5;
console.log(x); // 10

x %= 5;
console.log(x); // 0

x = 2;
x **= 5;
console.log(x); // 32

var str = 'My name is ';
str += 'Lee';
console.log(str); //My name is Lee

/*
 - 할당문은 표현식인 문이다.
 */
var k;
console.log(k = 10); //10

/*
연쇄할당 오른쪽에서 왼쪽으로 진행
 */
var a, b, c;
a = b = c = 10;
console.log(a, b, c);