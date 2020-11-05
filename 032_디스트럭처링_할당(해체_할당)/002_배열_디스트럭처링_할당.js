// 002 배열 디스트럭처링 할당

// ES5에서 구조화된 배열을 디스트럭처링 하여 1개 이상의 변수에 할당하는 방법은 다음과 같다.

var arr1 = [1, 2, 3];

var one1 = arr1[0];
var two1 = arr1[1];
var three1 = arr1[2];

console.log(one1, two1, three1);

/*
    - ES6의 배열 디스트럭처링 할당은 배열의 각 요소를 배열로 부터 추출하여 1개 이상의 변수에 할당한다.
    - 이때 배열 디스트럭처링 할당의 대상(할당문의 우변)은 이터러블이어야하며, 할당 기준은 배열의 인덱스다. 순서대로 할당된다.
 */
const arr = [3, 5, 7];

const [one, two, three] = arr;
console.log(one, two, three); // 3 5 7

// 배열 디스트럭처링 할당을 위해서는 할당연산자 왼쪽에 값을 할당 받을 변수를 선언해야한다. 이때 변수를 배열 리터럴 형태로 선언한다.
const [x, y] = [1, 2];

// 이 때 우변에 이터러블을 할당하지 않으면 에러가 발생한다.
//const [x, y]; // Syntaxㄷ깩
//const [a, b] = {}; // TypeError {} is not iterable

// 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다.

const [c, d] = [1];
console.log(c, d); // 1 undefined

const [e, f] = [3, 5, 7];
console.log(e, f); // 3 5

const [g, , h] = [7, 8, 9];
console.log(g, h); // 7 9

// 배열 디스트럭처링 할당을 위한 변수에 기본 값을 설정할 수 있다.
const [i, j, k = 3] = [1, 2];
console.log(i, j, k); // 1 2 3

// 배열의 디스트럭처링 할당을 위한 변수에 Rest파라미터와 유소하게 사용할 수 있다. Rest요소는 반드시 마지막에 위치해야한다.
const [m, ...n] = [3, 4, 5, 6];
console.log(m, n); // 3 [ 4, 5, 6 ]

