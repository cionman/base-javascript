// 011 마지막 위치 검색
/*
    - $는 문자열의 마지막을 의미한다.
 */

const target = 'https://test.com';
const regExp = /com$/;
console.log(regExp.test(target)); //true