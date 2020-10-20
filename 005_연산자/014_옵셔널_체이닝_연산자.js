// 014 옵셔널 체이닝 연산자

/*
   - ES11(ECMAScript2020)에서 도입된 옵셔널 체이닝 연산자 ?. 는 좌항의 피연산자가 null 또는 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다
   - nodejs 13 이하에서는 동작하지 않는다.
 */

var elem = null;
var value = elem?.value;
console.log(value);

/*
  - 옵셔널 체이닝 연산자가 도입되기 이전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수가 null 또는 undefined인지 확인했다.
  - 논리연산자 && 는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0,  -0, NaN, '')이면 좌항 값을 그대로 반환한다.
  - 하지만 좌항 피연산자가 Falsy값인 0이나 ''인 경우에 때때로 객체로 평가될 때가 있다.
 */

var str = '';
var length = str && str.length;

//문자열 길이를 참조하지 못한다.
console.log(length); // ''

// 하지만 옵셔넟 체이닝 연산자는 Falsy 값이라도 null 또는 undefined가 아니면 우항프로퍼티 참조를 이어간다.

var str2 = '';
var length2 = str2?.length;
console.log(length2); //0