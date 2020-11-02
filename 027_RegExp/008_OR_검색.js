// 008 OR 검색
/*
    - | 은 or의 의미를 갖는다.
    - /A|B/ A 또는 B를 의미한다.
 */
const target = 'A AA B BB Aa Bb';

//A 또는 B를 전역 검색한다.
const regExp = /A|B/g;
console.log(target.match(regExp)); // ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B']

// 'A' 또는 'B'가 한번 이상 반복되는 문자열을 전역 검색한다.
const regExp2 = /A+|B+/g;
console.log(target.match(regExp2)); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

/*
    - 위 예제 패턴을  or로 한번 이상 반복하는 것인데 이를 간단히 표현하면 다음과 같다.
    - []내의 문자는 or로 동작한다. 그 뒤에 +를 사용하면 앞서 패턴을 한번 이상 반복한다.
 */
const regExp3 = /[AB]+/g;
console.log(target.match(regExp3)); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

// 범위를 지정하려면 [] 내에서 - 를 사용한다.
// 대문자 알파벳 검색하는 예제
const regExp4 = /[A-Z]+/g;
console.log(target.match(regExp4)); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

//대소문자를 구별하지 않고 알파벳 검색
const regExp5 = /[A-Za-z]+/g;
console.log(target.match(regExp5)); // [ 'A', 'AA', 'B', 'BB', 'Aa', 'Bb' ]

//숫자를 검색하는 방법
const target2 = 'AA BB 12,345';

const regExp6 = /[0-9]+/g;
console.log(target2.match(regExp6)); // [ '12', '345' ], 쉼표때문에 매칭결과가 분리됨

//숫자 및 쉼표를 포함
const regExp7 = /[0-9,]+/g;
console.log(target2.match(regExp7)); //[ '12,345' ]

/*
    - \d는 숫자를 의미한다.
    - \d 는 [0-9] 와 같다.
    - \D 는 문자를 의미한다.(0-9가 아닌 문자, 빈문자포함)
 */
const regExp8 = /[\d,]+/g;
console.log(target2.match(regExp8)); // [ '12,345' ]

const regExp9 = /[\D,]+/g;
console.log(target2.match(regExp9));  // [ 'AA BB ', ',' ]

/*
    - \w는 알파벳, 숫자, 언더스코어를 의미한다.
    - \w는 [A-Za-z0-9_]와 같다.
    - \W는 \w와 반대로 동작한다.
    - \W는 알파벳, 숫자, 언더스코어가 아닌 문자를 의미한다.
 */

const target3 = 'Aa Bb 12,345 _$%&';

// 알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp10 = /[\w,]+/g;

console.log(target3.match(regExp10)); // -> ["Aa", "Bb", "12,345", "_"]

// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp10 = /[\W,]+/g;

console.log(target3.match(regExp10)); // -> [" ", " ", ",", " $%&"]