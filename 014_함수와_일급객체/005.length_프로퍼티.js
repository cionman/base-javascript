// 005 length 프로퍼티
/*
    - 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
 */

function foo() {
}

console.log(foo.length); // 0

function bar(x, y, z) {
    return x + y + z;
}

console.log(bar.length); //3
