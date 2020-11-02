// 006 임의의 문자열 검색
/*
    - .은 임의의 문자 한개를 의미한다. 문자의 내용은 무엇이든 상관 없다.
    - 다음 예제의 경우 .을 3개 연속하여 패턴을 생성했으므로 문자의 내용과 상관 없이 3자리 문자열과 매치한다.
 */
const target = 'Is this all there is?';
const regExp = /.../g;
console.log(target.match(regExp));// ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']




