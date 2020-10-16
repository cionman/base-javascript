/*

전역 변수
- 함수 바깥에서 선언된 변수 유효 범위가 전체

지역 변수
- 함수 안쪽에서 선언된 변수 함수 인자로 유효 범위는 변수가 선언된 함수 내부

 */

var a = "global";

function f() {
    var b = "local";
    console.log(a); // global
    if (true) {
        var c = 'c';
    }
    console.log(c);
    return b;
}

f();
console.log(b); // reference error
