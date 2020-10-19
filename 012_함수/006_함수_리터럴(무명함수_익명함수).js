/*
- 함수는 함수 리터럴로 정의
- 함수 리터럴은 이름이 없는 함수, 익명함수, 무명함수 라고 불리움

 */

var square = function (x) {
    return x * x;
};

/*
- 함수 선언문으로 정의된 함수는 호이스팅 되지만, 함수 리터럴로 정의된 함수는 끌어올리지 않는다.
 */

// console.log(plus(3, 5));  //TypeError: plus is not a function
var plus = function (a, b) {
    return a + b;
};

//익명 함수에도 이름을 붙일수 있으나, 외부에서 호출은 할 수 없고, 함수 안에서만 유효하다.

var minus = function mn(c, d) {
    return c - d;
};
// mn(5, 3) // TypeError: plus is not a function
