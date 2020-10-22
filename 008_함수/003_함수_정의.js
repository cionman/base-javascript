// 003 함수 정의

/*
    함수 정의 하는 방법
 */

// 1. 함수 선언문
function add1(x, y) {
    return x + y;
}

console.log(add1(1, 2)); //3

//2. 함수 표현식
var add2 = function (x, y) {
    return x + y;
};

console.log(add2(1, 2));//3

//3. Function 생성자 함수
/*
   - Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다.
   - 클로저를 생성하지 않는 등 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.
 */
var add3 = new Function('x', 'y', 'return x + y');

console.log(add3(1, 2));//3

//4. 화살표 함수(ES6)
var add4 = (x, y) => x + y;

console.log(add4(1, 2));//3


