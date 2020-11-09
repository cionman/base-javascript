// 004 함수 단위로 strict mode를 적용하는 것도 피하자
/*
    - 어떤 함수는 strict mode를 적용하고 어떤 함수는 적용하지 않는 것은 바람직 하지 않다.
    - 모든 함수에 일일이 적용하는 것은 번거로운 일이다.

    - 따라서 strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.
 */
(function () {
    // non-strict mode
    var lеt = 10; // 에러가 발생하지 않는다.

    function foo() {
        'use strict';

        //let = 20; // SyntaxError: Unexpected strict mode reserved word
    }

    foo();
}());