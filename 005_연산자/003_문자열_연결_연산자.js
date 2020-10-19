// 003 문자열 연결 연산자

/*
  + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
 */

// 문자열 연결 연산자
console.log('1' + 2); //12
console.log(1 + '2'); //12
console.log(1 + 2 + '2'); //32
console.log(1 + 2 + '2' + 2 + 1); //3221

// 산술 연산자
console.log(1 + 2); //3

//true 는 1로 변환 (암묵적 타입변환)
console.log(1 + true); // 2

//false는 0으로 변환 (암묵적 타입변환)
console.log(1 + false); //1

//null은 0으로 변환 (암묵적 타입변환)
console.log(1 + null); // 1

//undefined는 숫자로 변환되지 않는다.
console.log(+undefined);  // NaN
console.log(1 + undefined); //NaN