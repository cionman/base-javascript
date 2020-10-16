/*
 var 변수이름 =  new Function(첫번째 인수, ... , n번째 인수, 함수 몸통)
 */

var square = new Function("x", "return x * x");
console.log(square(5));
