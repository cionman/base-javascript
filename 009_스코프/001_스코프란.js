// 001 스코프란

/*
    - 모든 식별자(변수 이름, 함수이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른코드가 식별자 자신을 참조할 수 있는 유효 범위를 스코프라한다.
    - 짧게 말해 스코프는 식별자가 유효한 범위
    - 자바스크립트의 스코프는 다른 언어의 스코프와 구별되는 특징이 있으므로 주의가 필요
 */

var var1 = 1;

if (true) {
    var var2 = 2;
    if (true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;

    function bar() {
        var var5 = 5;
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
//console.log(var4); ReferenceError: var4 is not defined
//console.log(var5); ReferenceError: var5 is not defined

/*
    - 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙
    - 스코프라는 개념이 없다면 같은 이름을 갖는 변수는 충돌을 일으키므로 프로그램 전체에서 하나 밖에 사용할 수 없다.
    - 프로그래밍 언어에서는 스코프를 통해 식별자인 변수 이름의 충돌을 방지 하여 같은 이름의 변수를 사용할 수 있게 한다.
    - 스코프 내에서 식별자는 유일해야하지만 다른 스코프에는 같은 이름의 식별자를 사용할 수 있다.
    - 즉 스코프는 네임스페이스다.

 */
var x = 'global';

function foo2() {
    var x = 'local';
    console.log(x);
}

foo2();
console.log(x);