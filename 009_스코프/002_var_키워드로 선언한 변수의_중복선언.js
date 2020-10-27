// 002 var 키워드로 선언한 변수의 중복선언
/*
    - var 키워드로 선언된 변수는 같은 스코프내에서 중복선언이 허용도니다. 이는 의도치 않게 변수 값이 재할당되어 변경되는 부작용을 발생시킨다.
 */

function foo() {
    var x = 1;
    var x = 3;
    console.log(x);
}

foo(); //3

var a = 5;
var a = 7;
console.log(a); //7

/*
    - let이나 const 키워드로 선언된 변수는 같은 스코프내에서 중복 선언을 허용하지 않는다.
 */
function bar() {
    let x = 1;
    //let x = 2; Syntax error
}