// 005 세미콜론과 세미콜론 자동 삽입 기능

/*
   - 세미콜론은 문의 종료를 나타낸다.
   - 자바스크립트 엔진은 세미콜론으로 문이 종료한 위치를 파악하고 순차적으로 하나씩 문을 실행한다.
   - 단 0개 이상의 문을 중괄호로 묶은 코드 블록 뒤에는 세미콜론을 붙이지 않는다.
   예를 들어 if문, for문 함수등의 코드 블록 뒤에는 세미콜론을 붙이지 않는다.
   이러한 코드 블록은 언제나 문의 종료를 의미하는 자체 종결성을 갖기 때문이다.
   - 문의 끝에 붙이는 세미콜론은 옵션이다. 생략가능
   - 자바스크립트 엔진이 소스코드를 해석할 때 문의 끝이라고 예측되는 지점에 세미콜론을 자동으로 붙여주는 세미콜론 자동 삽입기능이 암묵적으로 수행되기 때문이다.
   - 세미콜론 자동삽입기능의 동작과 개발자의 예측이 일치하지 않는 경우가 간혹 있어 문제가 되는 경우가 있다.
   - 세미콜론을 반드시 붙여야 한다는 주장이 다수를 차지, ESLint도 세미콜론을 기본으로 설정,TC39도 세미콜론을 권장하는 분위기
 */

// 세미콜론 자동 삽입기능을 잘못 예측한 예

function foo() {
    return;
    {
    }

    //개발자의 예측 => return {};
    //자바스크립트엔진의 동작 => return; {};
}

var bar = function () {
}
(function () {
})();

// 개발자의 예측 var bar = function () {}; (function(){})();
// 자바스크립트엔진의 동작 var bar = function () {}(function(){})();