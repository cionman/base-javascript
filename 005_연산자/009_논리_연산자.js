// 009 논리 연산자

/*
  - 논리 연산자는 우항과 좌항의 피연산자를 논리 연산한다.

  || : 논리합(OR)
  && : 논리곱(AND)
  ! : 부정(NOT)
 */
// || 논리합 연산자
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false


// && 논리곱 연산자
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// ! 부정 연산자
console.log(!true); //false
console.log(!false); //true

//부정 연산자는 언제나 불리언 값을 반환, 피연산자가 반드시 불리언 값일 필요는 없다. 만약 피연산자가 불리언 값이 아니라면 불리언 타입으로 암묵적인 타입변환이된다.
console.log(!0); //true
console.log(!'Hello'); // false

/*
   - 논리합 또는 논리곱 연산자의 결과는 불리언 값이 아닐 수 있다.
   - 2개의 피연산자 중 어느 한쪽으로 평가된다.
 */
console.log('Cat' && 'Dog'); // Dog

// 드모르간의 법칙
!(x || y) == (!x && !y);
!(x && y) == (!x || !y);