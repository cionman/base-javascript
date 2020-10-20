// 013 지수 연산자
/*
  - ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑으로 우항의 피연산자를 지수로 거듭제곱하여 숫자 값을 반환한다.
 */

console.log(2 ** 2); //4
console.log(2 ** -2); //0.25

//지수 연산자가 도입되기 이전에는 Math.pow메서드를 이용

console.log(Math.pow(2, 2)); //4
console.log(Math.pow(2, -2)); //0.25


// 음수 거듭 제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야 한다.
// console.log(-5 ** 2); //SyntaxError
console.log((-5) ** 2); // 25

// 지수 연산자는 다른 산술 연산자와 마찬가지로 할당 연산을 사용할 수 있다.
var num = 5;
num **= 2;
console.log(num); // 25

// 지수 연산은 이항 연산자 중 우선순위가 가장 높다.
console.log(2 * 5 ** 2); // 50