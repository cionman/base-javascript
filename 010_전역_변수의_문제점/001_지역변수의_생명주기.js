//001 지역 변수의 생명 주기
/*
    지역 변수의 생명 주기는 함수의 생명주기와 일치 한다.
 */


function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();
//console.log(x); //ReferenceError

/*
     - 지역 변수의 생명주기는 함수의 생명주기와 대부분 일치하지만 지역 변수가 함수보다 오래 생존하는 경우도 있다.
     - 일반적으로 함수가 종료하면 함수가 생성한 스코프도 소멸한다. 하지만 누군가가 스코프를 참조하고 있다면 스코프는 해제되지 않고 생존한다.
 */

var y = 'global';

function bar() {
    console.log(y);
    var y = 'local';
}

/*
     - bar 함수 내에서  지역변수 y는 이미 함수 시작하면서 선언되었고 undefined로 초기화 되어 있다.
     - 호이스팅은 스코프를 단위로 동작 한다.
     - 호이스팅은 변수 선언이 스코프의 선두로 끌어올려진 것 처럼 동작하는 자바스크립트 특징을 말한다.
 */
bar(); //undefined
console.log(y); //global