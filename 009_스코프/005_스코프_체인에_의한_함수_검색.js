//005 스코프 체인에 의한 함수 검색

/*
    - 일반 함수도 식별자에 할당되기 때문에 스코프를 갖는다.
    - 스코프를 '변수를 검색할 때 사용하는 규칙' 이라 표현하기 보다는 '식별자를 검색하는 규칙' 이라고 표현하는 것이 더 적합하다.
 */

// 전역 함수
function foo() {
    console.log('global function foo');
}

function bar() {
    function foo() {
        console.log('local function foo');
    }

    foo();
}

console.log(bar());