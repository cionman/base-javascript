// 004 함수 호이스팅

/**
 - 변수 선언문과 마찬가지로 함수 선언문을 프로그램의 첫머리로 끌어 올림
 */

console.log(square(5));

function square(x) {
    return x * x;
}


/*
- 함수 선언문으로 정의된 함수는 호이스팅 되지만, 함수 리터럴로 정의된 함수는 끌어올리지 않는다.
 */

// console.log(plus(3, 5));  //TypeError: plus is not a function
var plus = function (a, b) {
    return a + b;
};