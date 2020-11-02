// 009 NOT 검색
/*
    - [] 내에서 ^ 은 not을 의미한다.
    - [^0-9]는 숫자를 제외한 문자를 의미한다.
 */

const target = 'AA BB Aa Bb 12';

// 숫자를 제외한 문자열을 전역 검색한다.
const regExp = /[^0-9]+/g;

console.log(target.match(regExp)); // -> ["AA BB ", " Aa Bb"]