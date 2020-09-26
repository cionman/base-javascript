/*
- 자바스크립트는 타입이 없으므로 숫자를 모두 64비트 부동소수점으로 표현 java에서는 double 타입에 해당
- 배열 인덱스와 비트 연산은 32비트 정수
 */

/*
- 프로그램에 직접 작성할 수 있는 상수 값은 리터럴이라고 합니다. 숫자를 표현하는 리터럴에는 정수 리터럴과 부동 소수점 리터럴
 */

// 정수 리터럴
var a = 123  // 10 진수
var b = 0x2a // 16 진수 숫자앞에 0x를 붙임
var c = 0o73 // 8 진수 숫자 앞에 0o를 붙임
var d = 0b101 // 2진수 숫자 앞에 0b를 붙임

// 부동 소수점 리터럴
var e =  3.14 // 일반 소수점
var f = .123 // 정수부가 0일때는 0을 생략
var g = 6.02e23 // 6.02 * 10^23
var h = 1.616199E-35 // 붙여서 작성해야한다. 1.616199 * 10^-35

// 특별한 숫자를 표기하기 위한 문자열

var i = Infinity // 무한대
var j = NaN // Not a Number
var k = Number.POSITIVE_INFINITY  //플러스 무한
var l = Number.NEGATIVE_INFINITY  //마이너스 무한
var m = Number.MAX_VALUE  //표현할 수 있는 최대값
var n = Number.NaN // NaN
var o = Number.EPSILON // 2.22044604925031e-16
var p = Number.MIN_SAFE_INTEGER // -9007199254740900
var q = Number.MAX_SAFE_INTEGER // 9007199254740900


