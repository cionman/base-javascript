// 003 String 메서드

/*
    - 배열에는 원본 배열을 직접 변경하는 메서드와 새로운 배열을 반환하는 메서드가 있지만,
    String 객체에는 원본 객체를 직접 변경하는 메서드는 없다.
    - String 객체의 메서드는 언제나 새로운 문자열을 반환한다.
    - 문자열은 변경 불가능한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다.
 */

const strObj = new String('Lee');
console.log(Object.getOwnPropertyDescriptors(strObj));

/*
    1. String.prototype.indexOf
    - 대상문자열에서 인수로 전달 받은 문자열을 검색하여 첫번째 인덱스를 반환한다.
    - 검색에 실패하면 -1
 */


let str = 'Hello World';

// 문자열 str에서 'l'을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf('l')); // -> 2


// 문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
console.log(str.indexOf('or')); // -> 7

// 문자열 str에서 'x'를 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
console.log(str.indexOf('x')); // -> -1

// indexOf 메서드의 2번째 인수로 검색을 시작할 인덱스를 전달 할 수 있다.
console.log(str.indexOf('l', 3)); //3

// indexOf 메서드는 대상 문자열에 특정 문자열이 존재하는지 확인할 때 유용하다.
if (str.indexOf('Hello') !== -1) {
    console.log('문자열 str에 Hello가 포함 되어 있는 경우 처리할 내용');
}

//ES6에서 도입된 String.prototype.includes메서드를 사용하면 가독성이 더 좋다.
if (str.includes('Hello')) {
    console.log('문자열 str에 Hello가 포함 되어 있는 경우 처리할 내용');
}

/*
    2. String.prototype.search
    - 대상 문자열에서 인수로 전달 받은 정규표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
    - 검색에 실패하면 -1을 반환
 */
console.log(str.search(/o/)); // -> 4
console.log(str.search(/x/)); // -> -1

/*
    3. String.prototype.includes
    - ES6에 도입
    - 인수로 전달 받은 문자열이 포함되어 있으면 true, 아니면 false
 */

console.log(str.includes('Hello')); // -> true
console.log(str.includes(''));      // -> true
console.log(str.includes('x'));     // -> false
console.log(str.includes());        // -> false

//includes 메서드 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
console.log(str.includes('l', 3)); //true
console.log(str.includes('H', 3)); //false

/*
    4. String.prototype.startWith
    - ES6에서 도입
    - 인수로 전달받은 문자열로 시작하면 true 아니면 false
 */
console.log(str.startsWith('He')); //true
console.log(str.startsWith('dd')); //false

// 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
console.log(str.startsWith(' ', 5)); //true

/*
    5. String.prototype.endWidth
    - ES6에서 도입
    - 인수로 전달받은 문자열로 끝나면 true 아니면 false
 */

console.log(str.endsWith('World')); //true
console.log(str.endsWith('dd')); //false

// 2번째 인수로 검색할 문자열의 길이를 전달할 수 있다.
// 문자열 str의 처음 부터 5자리까지(Hello)가 lo로 끝나는지 확인
console.log(str.endsWith('lo', 5)); //true

/*
    6. String.prototype.charAt
    - 인수로 전달 받은 인덱스에 위치한 문자를 반환
 */

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i)); // H e l l o  w o r l d
}

//범위를 벗어난 경우 빈 문자열을 반환한다.
console.log(str.charAt(1000)); //빈문자열

/*
    7. String.prototype.substring
    - 첫번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의
    바로 이전 문자까지의 부분 문자열을 반환한다.
 */

console.log(str.substring(1, 4)); //ell

// 두번째 인수는 생략할 수 있다. 첫번째 인수 시작 부터 마지막 문자열까지 반환한다.
console.log(str.substring(1)); //ello World

// 첫번째 인수 > 두번째 인수 인경우 두 인수는 교환된다.
console.log(str.substring(4, 1)); // ell

// 인수 < 0 또는 NaN인 경우 두 인수는 0으로 취급
console.log(str.substring(-2)); // Hello World

// 인수 > 문자열 길이(str.length)인 경우 인수는 문자열 길이로 취급된다.
console.log(str.substring(1, 1000)); // ello World
console.log(str.substring(20)); // ''

// indexOf메서드와 함께 사용하면 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열을 취득 할 수 있다.
console.log(str.substring(0, str.indexOf(' '))); //Hello
console.log(str.substring(str.indexOf(' ') + 1, str.length)); //World

/*
    8. String.prototype.slice
    - substring메서드와 동일하게 동작한다. 단 메서드에는 음수인 인수를 전달할 수 있다.
    - 음수인 인수를 전달하면 대상 문자열의 가장 뒤에서 부터 시작하여 문자열을 잘라내어 반환한다.
 */

console.log(str.substring(0, 5)); //Hello
console.log(str.slice(0, 5)); //Hello

console.log(str.substring(2)); //llo World
console.log(str.slice(2)); //llo World

//인수가 0보다 작으면 0으로 취급된다.
console.log(str.substring(-5)); //Hello World
/// 뒤에서 5자리를 잘라내어 반환한다.
console.log(str.slice(-5)); //World

/*
    9. String.prototype.toUpperCase
    - 대상 문자열을 모두 대문자로 변경한 문자열을 반환한다.
 */

console.log(str.toUpperCase()); // HELLO WORLD

/*
    10. String.prototype.toLowerCase
    - 대상 문자열을 모두 소문자로 변경한 문자열을 반환한다.
 */
console.log(str.toLowerCase()); // hello world

/*
    11. String.prototype.trim
    - trim메서드는 대상 문자열 앞뒤 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다.
 */
const str2 = '    foo    ';
console.log(str2.trim()); //foo

// 2020년 7월 stage4에 제안되어 있는 trimStart, trimEnd를 사용하면 문자옆 앞과 뒤 공백 문자 제거

// String.prototype.{trimStart,trimEnd} : Proposal stage 4
str2.trimStart(); // -> 'foo  '
str2.trimEnd();   // -> '   foo'

// replace 메서드에 정규표현식을 인수로 전달하여 공백 문자를 제거할 수 있다. 단 앞뒤 공백 제거가 아니라 공백은 모두 제거된다.
console.log(str2.replace(/\s/g, '')); // 'foo'
console.log(str2.replace(/^\s+/g, '')); // 'foo    '
console.log(str2.replace(/\s+$/g, '')); // -> '   foo'

/*
    12. String.prototype.repeat
    - ES6에서 도입
    - 대상 문자열을 인수로 전달 받은 정수 만큼 반복해 연결한 새로운 문자열을 반환
    - 인수가 0이면 빈 문자열을 반환
    - 인수가 음수면 RangeError
    - 인수를 생략하면 인수0으로 설정 빈문자열 반환
 */

console.log(str.repeat()); // ''
console.log(str.repeat(0)); // ''
console.log(str.repeat(1)); // 'Hello World'
console.log(str.repeat(2)); // 'Hello WorldHello World'
//2로 내림
console.log(str.repeat(2.5)); // 'Hello WorldHello World'
//console.log(str.repeat(-1)); // RangeError

/*
    13. String.prototype.replace
    - 첫번째 인수로 전달 받은 문자여 ㄹ또는 정규표현식을 검색하여 두번째 인수로 전달한 문자열로 치환한 문자열을 반환
 */

console.log(str.replace('World', 'lee')); //Hello lee

// 검색된 문자열이 여럿 존재할 경우 첫번째로 검색된 문자열만 치환
const str3 = 'Hello World World';
console.log(str3.replace('World', 'lee')); //Hello lee World

/*
    - 특수한 교체 패턴을 사용할 수 있다.
    - $&는 검색된 문자열을 의미한다.
 */

console.log(str.replace('World', '<strong>$&</strong>')); // Hello <strong>World</strong>

// 정규 표현식을 전달 할 수 있다.
// 정규 표현식 g플래그를 이용할 경우 검색된 모든 문자가 변경된다.
console.log(str3.replace(/World/g, 'Lee')); // Hello Lee Lee


// 2번째 인수로 치환 함수를 전달 할 수 있다.
const camelCase = 'helloWorld';
// /.[A-Z]/g 는 임의의 한 문자와 대문자로 이루어진 문자열에 매치 한다.
// 치환함수의 인수로 매치결과가 전달되고, 치환함수가 반환한 결과의 매치 결과를 치환한다.
console.log(camelCase.replace(/.[A-Z]/g, match => {
    console.log(match);
    return match[0] + '_' + match[1].toLowerCase();
}));

/*
    14. String.prototype.split
    - 첫번째 인수로 전달한 문자열 또는 정규식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.
    - 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
    - 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
 */

const strSplit = 'How are you doing?';
//공백으로 구분 배열로 반환
console.log(strSplit.split(' ')); // [ 'How', 'are', 'you', 'doing?' ]

//\s는 여러가지 공백 문자를 의미
console.log(strSplit.split(/\s/)); // [ 'How', 'are', 'you', 'doing?' ]

//빈 문자열은 각문자를 모두 분리한다.
console.log(strSplit.split('')); // ['H', 'o', 'w', ' ', 'a','r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', '?']

// 인수 생략
console.log(strSplit.split()); // [ 'How are you doing?' ]

// 두번째 인수로 배열의 길이를 지정할 수 있다.
console.log(strSplit.split(' ', 3)); // [ 'How', 'are', 'you' ]

// 문자열을 역순으로 뒤집는다.
console.log(strSplit.split('').reverse().join('')); // ?gniod uoy era woH
