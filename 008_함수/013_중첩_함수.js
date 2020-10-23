// 013 중첩 함수
/*
    - 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라 한다.
    - 중첩 함수는 외부함수 내부에서만 호출할 수 있다.
    - 일반적으로 중첩함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수 역할을 한다.
 */

function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y); //3
    }

    inner();
}

outer(); //3
//inner(); //ReferenceError: inner is not defined