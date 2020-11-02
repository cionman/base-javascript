// 010 시작 위치로 검색
/*
    - [] 밖의 ^ 는 문자열의 시작을 의미한다.
 */

const target = 'https://test.com';
const regExp = /^https/;
console.log(regExp.test(target)); //true