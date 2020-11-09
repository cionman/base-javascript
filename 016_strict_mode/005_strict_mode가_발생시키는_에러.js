// 005 strict mode가 발생시키는 에러

/*
    1. 암묵적 전역
    - 선언하지 않은 변수를 참조하면 ReferenceError 발생
 */

(function () {
    'use strict';

    x = 1;
    console.log(x); // ReferenceError: x is not defined
}());

/*
    2. 변수 함수 매개변수의 삭제
    - delete 연산자로 변수 함수 매개변수를 삭제하면 SyntaxError가 발생한다.
 */

(function () {
    'use strict';

    var x = 1;
    // delete x;

    // SyntaxError: Delete of an unqualified identifier in strict mode.

    function foo(a) {
        //   delete a;
        // SyntaxError: Delete of an unqualified identifier in strict mode.
    }

    // delete foo;
    // SyntaxError: Delete of an unqualified identifier in strict mode.
}());

/*
    3. 매개변수 이름의 중복
    - 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
 */

(function () {
    'use strict';

    //SyntaxError: Duplicate parameter name not allowed in this context
    /*function foo(x, x) {
        return x + x;
    }*/
    console.log(foo(1, 2));
}());

/*
    4. with 문의 사용
    - with 문을 사용하면 SytaxError가 발생한다.
    - with문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체이름을 생략할 수 있어서
    코드가 간단해지는 효과가 있지만 성능과 가독성이 나빠지는 문제가 있다. with문은 사용하지 않는 것이 좋다.
 */

(function () {
    'use strict';

    // SyntaxError: Strict mode code may not include a with statement
    /*with({ x: 1 }) {
        console.log(x);
    }*/
}());