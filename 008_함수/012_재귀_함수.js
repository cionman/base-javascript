// 012 재귀 함수

/*
    - 함수가 자기 자신을 호출 하는 것을 재귀 호출이라한다.
    - 재귀 함수는 자기 자신을 호출 하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
    - 재귀 함수는 반복되는 처리를 위해 사용한다.
 */

function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

function countdown2(n) {
    if (n < 0) return;
    console.log(n);
    countdown2(n - 1); //재귀 호출
}

countdown2(5);

/*
    - 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다.
 */

function factorial(n) {
    // 탈출 조건: n이 1이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    //재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120

/*
    - 재귀 함수는 자신을 무한 재귀 호출한다.
    - 재귀 함수내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야한다.
    - 대부분의 재귀 함수는 for문이나 while문으로 구현 가능하다.
 */

function factorial2(n) {
    if (n <= 1) return 1;
    var res = n;
    while (--n) res *= n;
    return res;
}

console.log(factorial2(5)); //120

/*
    - 재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 있다
    - 하지만 무한 반복에 빠질 위험이 있어 주의해서 사용해야한다.
    - 재귀 함수는 반복문을 사용하는 것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다.
 */