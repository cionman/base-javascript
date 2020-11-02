// 002 정규 표현식 생성
/*
    - 정규표현식 리터럴과 RegExp 생성자 함수를 사용하는 방법이 있다.

     정규표현식 리터럴

     /regexp/i
     /패턴/플래그
 */
const target = 'Is this all there';

//패턴: is
//플래그: i => 대소문자를 구별하지 않고 검색한다.
const regExp = /is/i;
console.log(regExp.test(target)); //true

/*
    - RegExp 생성자 함수를 사용하여 RegExp객체를 생성할 수도 있다.
    - pattern : 정규 표현식 패턴
    - flag : 정규 표현식의 플래그(g, i, m, u, y)
    new RegExp(pattern, [flag])
 */

const regExp2 = new RegExp(/is/i); // ES6
// const regExp2 = new RegExp(/is/, 'i');
// const regExp2 = new RegExp('is', 'i');
console.log(regExp2.test(target));