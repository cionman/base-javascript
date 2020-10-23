// 009 반환문

/*
    - 함수는 return 키워드와 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환할 수 있다.
 */

function multiply(x, y) {
    return x * y; //  반환문
}

console.log(multiply(3, 5)); //15

/*
    - 반환문은 2가지 역할을 한다.
        1. 함수의 실행을 중단하고 함수 몸체를 빠져나간다.
        2. 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다. 키워드 뒤에 표현식을 지정하지 않으면 undefined가 반환된다.
 */

function multiply2(x, y) {
    return x * y;
    console.log('실행되지 않는다.');
}

console.log(multiply2(3, 5)); // 15

function foo() {
    return;
}

console.log(foo()); // undefined

// 반환문을 생략하면 암묵적으로 undefined가 반환된다.
function foo2() {

}

console.log(foo2()); //undefined


/*
    - return 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 세미콜론 자동 삽입 기능에 의해 다음과 같이 의도치 않은 결과가 발생할 수 있다.
 */

function multiply3(x, y) {
    return;
    x * y;
}

console.log(multiply3(3, 5)); //undefined