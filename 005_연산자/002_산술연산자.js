// 002 산술 연산자

/*
  - 산술 연산자는 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다.
  - 산술연산이 불가능한 경우는 NaN을 반환한다.
  - 산술 연산자는 피연산자의 개수에 따라 이항 산술 연산자와 단항 산술 연산자로 구분한다.
 */


/*
   - 이항 산술 연산자는 2개의 피연산자를 산술 연산하여 숫자 값을 만든다.
   - 모든 이항 산술 연산자는 피연산자의 값을 변경하는 부수효과가 없다.
   - 다시 말해 어떤 산술연산을 해도 피연산자의 값이 바뀌는 경우는 없고 새로운 값을 만들 뿐이다.
 */

5 + 2; // 덧셈
5 - 2; // 뺄셈
5 * 2; // 곱셈
5 / 2; // 나눗셈
5 % 2; // 나머지


/*
   1개의 피연산자를 산술하여 숫자값을 만든다.

   ++ 증가, 피연산자 변경
   -- 감소, 피연산자 변경
   + 효과 없음
   - 양수를 음수로, 음수를 양수로 반전한 값을 반환
 */

var x = 5, result;

//선할당 후증가
result = x++;
console.log(result, x);

//선증가 후할당
result = ++x;
console.log(result, x);

//선할당 후감소
result = x--;
console.log(result, x);

//선감소 후할당
result = --x;
console.log(result, x);

/*
  숫자 타입이 아닌 피연산자에 +단항 연산자를 사용하면 피연산자를 숫자타입으로 변환하여 반환
 */

var a = '1';
console.log(+a); // 1
console.log(a); // 1

a = true;
console.log(+a); //1
console.log(a); // true

a = false;
console.log(+a); //0
console.log(a); // false

a = 'happy';
console.log(+a); //NaN
console.log(a); // happy
