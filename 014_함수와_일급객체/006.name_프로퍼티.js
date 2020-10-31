// 006 name 프로퍼티
/*
    - 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.
    - name프로퍼티는 ES6이전까지는 비표준이었다가 ES6에서 정식 표준이 되었다.
    - ES5와 ES6에서는 동작을 달리 하므로 주의가 필요하다.
    - 익명 함수 표현식의 경우 ES5에서 name프로퍼티는 빈 문자열을 값으로 갖지만
    ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

 */
var namedFunc = function foo() {
};
console.log(namedFunc.name); //foo

var anonymousFunc = function () {
};

console.log(anonymousFunc.name); //anonymousFunc, ES5에서는 빈문자열
function bar() {
}

console.log(bar.name); //bar