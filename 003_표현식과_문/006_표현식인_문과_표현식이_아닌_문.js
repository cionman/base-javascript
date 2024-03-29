// 006 표현식인 문과 표현식이 아닌 문

//변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다
var x;

//1, 2, 1+2, x = 1 + 2는 표현식
//표현식이면서 완전한 문
x = 1 + 2;

/*
  표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해 보는 것
 */

// 표현식이 아닌 문은 값처럼 사용할 수없다.
//var foo = var x; // SyntaxError

var foo = x = 100;
console.log(foo);