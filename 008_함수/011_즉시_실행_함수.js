// 011 즉시 실행 함수
/*
    - 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수(IIFE)라 한다.
    - 즉시 실행 함수는 단 한번만 호출되며 다시 호출할 수 없다.
 */
console.log((function () {
    var a = 3;
    var b = 5;
    return a * b;
}())); // 15


// 즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다. 하지만 이름을 적시 할 수 있다, 해당 이름을 외부에서는 사용할 수 없다. 내부에서만 사용가능
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());
//console.log(foo()); // ReferenceError: foo is not defined

//즉시 실행 함수는 반드시 그룹 연산자로 감싸야 한다. 그렇지 않으면 에러 발생

/*
function (){

}();
//Syntax Error
*/
/*
    - 그룹 연산자로 함수를 묶은 이유는 먼저 함수 리터럴을 평가해서 함수 객체를 생성하기 위함
    - 먼저 함수 리터럴을 평가해서 함수 객체를 생성할 수 있다면 다음과 같이 그룹 연산자 이외의 연산자를 사용해도 좋다.
 */

(function () {
    console.log('그룹연산자로 감싼 즉시 실행함수 1');
}());

(function () {
    console.log('그룹연산자로 감싼 즉시 실행함수 2');
})();

!function () {
    console.log('논리연산자 즉시 실행함수');
}();

+function () {
    console.log('단항 연산자 즉시 실행함수');
}();

// 즉시 실행 함수도 인수를 전달 할 수 있다.
var res = (function (a, b) {
    return a * b;
}(3, 5));
console.log(res); //15