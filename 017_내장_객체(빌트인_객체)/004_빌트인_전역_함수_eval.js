// 004 빌트인 전역 함수 eval
/*
    - eval 함수는 자바스크립트 코드를 나타내는 문자열을 인수로 받는다.
    - eval 함수는 문자열 코드를 런타임에 평가하여 값을 생성하고, 전달 받은 인수가
    표현식이 아닌 문이라면 문자열 코드를 런타임에 실행한다.
    - 문자열 코드가 여러개의 문으로 이루어져 있다면 모든 문을 실행한다.

    - eval 함수를 통해 사용자로부터 입력받은 컨텐츠를 실행하는 것은 보안에 매우 취약하다.
    - eval 함수를 통해 실행되는 코드는 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로
    일반적인 코드 실행에 비해 처리 속도가 느리다.
    - eval 함수의 사용은 금지해야한다.

 */

console.log(eval('1 + 2;')); // -> 3
// 표현식이 아닌 문
eval('var x = 5;'); // -> undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); // {a: 1}

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); // 1

// 인수로 전달받은 문자열 코드가 여러개의 문으로 이루어져 있다면, 모든 문을 실행한 다음 마지막 결과 값을 반환한다.
console.log(eval('1 + 2; 3 + 4;')); // 7

//eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.

const z = 1;

function foo() {
    // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
    eval('var z = 2;');
    console.log(z); // 2
}

foo();
console.log(z); // 1

// strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
const xx = 1;

function foo2() {
    'use strict';

    // strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
    eval('var xx = 3; console.log(xx);'); // 3
    console.log(xx); // 1
}

foo2();
console.log(xx); // 1

