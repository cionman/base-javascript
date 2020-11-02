// 003 RegExp 메서드

/*
    1. RegExp.prototype.exec
    - 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다.
    - 매칭 결과가 없는 경우 null을 반환한다.
    - 문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫번째의 매칭결과만 반환하므로 주의 필요
 */

const target = 'Is this all there is?';
const target2 = 'is this all there is?';
const target3 = 'test voca';
const regExp = /is/;
console.log(regExp.exec(target)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
console.log(regExp.exec(target2)); //[ 'is', index: 0, input: 'is this all there is?', groups: undefined ]
console.log(regExp.exec(target3)); // null

/*
    2. RegExp.prototype.test
    - 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
 */
console.log(regExp.test(target)); //true
console.log(regExp.test(target2)); //true
console.log(regExp.test(target3)); //false

/*
    3. String.prototype.match
    - String 표준 빌트인 객체가 제공하는 match메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭결과를 배열로 반환한다.
 */
console.log(target.match(regExp)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
console.log(target2.match(regExp)); //[ 'is', index: 0, input: 'is this all there is?', groups: undefined ]
console.log(target3.match(regExp)); // null

//g 플래그가 지정되면 모든 매칭 결과를 반환한다.
const regExp2 = /is/g;
console.log(target2.match(regExp2)); //[ 'is', 'is', 'is' ]
