// 020 논리 연산자를 사용한 단축 평가

/*
    - 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
    - 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.

    true || anything -> true
    false || anything -> anything
    true && anything -> anything
    false && anything -> false
 */


/*
    - 논리곱 연산자는 두개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
    - 좌항에서 우항으로 평가가 진행된다.
    - Cat은 truthy로 true로 평가가 진행되고 두번째 연산자까지 평가해야 표현식을 평가할 수 있다. 두번째 연산의 결과를 결정하는 두번째 피연산자를 그대로 반환한다.
 */

console.log('Cat' && 'Dog'); // Dog
console.log(false && 'Dog'); //false
console.log('' && 'Dog'); //''
console.log('Cat' && ''); //''
console.log('Cat' && false); //false

/*
    - 논리합 연산자는 두개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
 */
console.log('Cat' || 'Dog'); // Cat
console.log('' || 'Dog'); // Dog
console.log(false || 'Dog'); // Dog
console.log('Cat' || ''); // Cat
console.log('Cat' || false); // Cat

/*
   - 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

   var elem = null;
   var value = elem.value; //TypeError 발생
 */
var elem = null;
var value = elem && elem.value;

/*
    - 함수 매개변수에 기본 값을 설정할 때
 */
function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength()); //0
console.log(getStringLength('hi')); //2

// ES6의 매개변수 기본값 설정
function getStringLength2(str = '') {
    return str.length;
}

console.log(getStringLength2()); //0
console.log(getStringLength2('hi')); //2

