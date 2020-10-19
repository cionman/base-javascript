// 004 템플릿 리터럴

/*
  - ES6부터 템플릿 리터럴 이라고 하는 새로운 문자열 표기법이 도입됨
  - 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리를 제공
  - 백틱(``)을 사용
 */

// 멀티라인 문자열
var str = `Hello
world
`;
console.log(str);

//표현식 삽입
var first = 'Su';
var last = 'Lee';
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`);

// 태그드 템플릿

const tag = (...args) => console.log(args);
tag`너의 정체가 도대체 뭐니?`; // [["너의 정체가 도대체 뭐니?", raw: ['너의 정체가 도대체 뭐니']]]

const a = '정체가';
const b = '뭐니?';
tag`너의 ${a} 도대체 ${b}`;


const meal = 'dinner';
const taste = 'good';

function getSnackTaste(string, eat, flavor) {
    console.log(`string : ${string}`);
    console.log(`string.raw : ${string.raw}`);
    console.log(`eat : ${eat}`);
    console.log(`flavor : ${flavor}`);

    let snack = 'cookie';
    let feel = 'bad';

    if (eat === 'breakfast') {
        snack = 'milk';
    }
    if (flavor === 'bad') {
        feel = 'good';
    }
    return string[0] + snack + string[1] + feel + '~~';
}


console.log(getSnackTaste
    `Today, ${meal} is ${taste}`
); // Today, cookie is bad~~