// 015 null 병합 연산자

/*
    - ES11(ECMAScript2020)에서 도입
    - null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
    - 변수에 기본값 설정할 때 유용
    - node 13 미만에서는 실행불가
 */

var foo = null ?? 'default string';
console.log(foo); //default string
