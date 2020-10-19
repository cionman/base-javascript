// 002 숫자타입

/*
 - 하나의 숫자 타입만 존재
 - 배정밀도 64비트 부동소수점 형식을 따름, 즉 모든 수를 실수로 처리
 - 정수만을 표현하기 위한 데이터 타입이 별도로 존재하지 않음
 */

var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; //음의 정수

var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

console.log(binary); //65
console.log(octal);  //65
console.log(hex);  //65
console.log(binary === octal); // true
console.log(hex === octal); // true

//숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); //true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

/*
숫자 타입은 추가적으로 3가지 특별한 값도 표현할 수 있다.
- Infinity :양의 무한대
- -Infinity :음의 무한대
- NaN: 산술연산불가(not a number)
 */

console.log(10 / 0); //Infinity
console.log(10 / -0); //-Infinity
console.log(1 * 'String'); // NaN