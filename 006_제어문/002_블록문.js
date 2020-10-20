// 002 블록문

/*
    - 블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부른다.
    - 자바스크립트는 블록문을 하나의 실행단위로 취급한다.
    - 블록문은 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반적
    - 문의 끝에는 세미콜론을 붙이는 것이 일반적이지만, 블록문은 자체 종결성을 갖기 때문에 끝에 세미콜론을 붙이지 않는다
 */

// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}