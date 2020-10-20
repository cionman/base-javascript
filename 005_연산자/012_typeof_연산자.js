// 012 typeof 연산자

/*
    - typeof 연산자는 피연산자의 데이터 타입을 문자열로 반환한다.
    - typeof 연산자는 7가지 문자열, 'string', 'number', 'boolean', 'undefined','symbol','object','function' 중의 하나를 반환한다.
    - null은 object로 반환한다.
    - null 타입 확인은 typeof 연산자를 사용하지말고, 일치 연산자(===)를 사용하자
 */

console.log(typeof ''); // 'string'
console.log(typeof 1); // 'number'
console.log(typeof NaN); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof null); // 'object'
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof new Date()); // 'object'
console.log(typeof /test/gi); // 'object'
console.log(typeof function () {
}); // 'function'

// null 타입 확인은 typeof 연산자를 사용하지말고, 일치 연산자(===)를 사용하자
var foo = null;
console.log(typeof foo === null); //false
console.log(foo === null); //true

//선언하지 않은 식별자를 typeof로 연산하면 Reference Error가 발생하지 않고 undefined를 반환한다.
console.log(typeof undeclared); // 'undefined'