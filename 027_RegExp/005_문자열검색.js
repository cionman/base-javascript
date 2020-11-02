// 005 문자열 검색
/*
    - 정규 표현식의 패턴에 문자를 지정하면 검색 대상 문자열에서 패턴으로 지정한 문자를 검색한다.
    - 대소문자를 구별하여 정규표현식과 매치한 첫번째 결과만 반환한다.
 */

const target = 'Is this all there is?';

// 'is' 문자열과 매치하는 패턴, 플래그가 생략되었으므로 대소문자를 구별한다.
const regExp = /is/;

//target과 정규표현식이 매치하는지 테스트 한다.
console.log(regExp.test(target)); //true

//target과 정규표현식의 매칭 결과를 구한다.
console.log(target.match(regExp)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 대소문자를 구별하지 않고 검색하려면 플래그 i를 사용한다.
const regExp2 = /is/i;
console.log(target.match(regExp2)); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

//모든 문자열을 검색하려면 플래그 g를 사용한다.

const regExp3 = /is/ig;
console.log(target.match(regExp3)); // [ 'Is', 'is', 'is' ]




