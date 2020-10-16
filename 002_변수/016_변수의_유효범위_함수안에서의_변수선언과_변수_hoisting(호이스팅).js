/*

전역 변수
- 함수 바깥에서 선언된 변수 유효 범위가 전체

지역 변수
- 함수 안쪽에서 선언된 변수 함수 인자로 유효 범위는 변수가 선언된 함수 내부

 */

function f() {
    console.log(a); // 호이스팅으로 ReferenceError가 나지 않고 undefined
    var a = "local";
    console.log(a); // local
    return a;
}

function d() {
    console.log(b); // 정의가 되지 않았으므로 ReferenceError
}

f();
d();


