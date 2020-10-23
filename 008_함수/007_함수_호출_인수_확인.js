// 007 함수 호출 - 인수 확인

/*
    - 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
    - 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
 */

function add(x, y) {
    return x + y;
}

console.log(add(2));  // NaN
console.log(add('a', 'b')); // 'ab'

function add2(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자값이어야 합니다.');
    }
    return x + y;
}

//console.log(add2(2));  // TypeError: 인수는 모두 숫자값이어야 합니다
//console.log(add2('a', 'b')); // TypeError: 인수는 모두 숫자값이어야 합니다

/*
    - 인수의 갯수는 확인하고 있지 않지만 arguments 객체를 통해 인수 개수를 확인할 수도 있다.
    - 인수가 전달되지 않은 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.
 */

function add3(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add3(1, 2, 3)); //6
console.log(add3(1, 2)); //3
console.log(add3(1)); //1
console.log(add3()); //0

/*
    - ES6에 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.
    - 매개변수 기본값은 인수를 전달하지 않은 경우와 undefined를 전달하는 경우에만 유효하다.
 */

function add4(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(add4(1, 2, 3)); //6
console.log(add4(1, 2)); //4
console.log(add4(1)); //3
console.log(add4()); //3
console.log(add4(undefined, undefined, undefined)); //3
console.log(add4(null, null, null)); // 0, null은 기본값이 동작하지 않는다.
