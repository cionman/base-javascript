// 001 정규 표현식이란
/*
    - 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식언어
    - 자바스크립트는 펄의 정규표현식 문법을 ES3부터 도입
 */
const tel = '010-1234-5678';
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel)); //true