// 002 표준 빌트인 객체
/*
    - 자바스크립트는 Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set,
    WeakMap/WeakSet, Function, Promise, Reflect, Proxy, JSON, Error 등 40여개의 표준 빌트인 객체를 제공한다.

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

    - Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체다.

    - 생성자 함수 객체인 표준 빌트인 객체는 프로토타입 메서드와 정적메서드를 제공하고,
    생성자 함수 객체가 아닌 표준 빌트인 객체는 정적메서드만 제공한다.
 */

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee'); // String {"Lee"}
console.log(typeof strObj);       // object

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123.5); // Number {123}
console.log(typeof numObj);     // object

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); // Boolean {true}
console.log(typeof boolObj);      // object

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x'); // ƒ anonymous(x )
console.log(typeof func);                       // function

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3); // (3) [1, 2, 3]
console.log(typeof arr);        // object

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp);         // object

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();  // Fri May 08 2020 10:43:25 GMT+0900 (대한민국 표준시)
console.log(typeof date); // object

/*
    - 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의
    prototype 프로퍼티에 바인딩된 객체다.
    - 예를 들어, 표준 빌트인 객체인 String 생성자 함수로서 호출하여 생성한 String인스턴스의 프로토타입은
    String.prototype이다.
 */

console.log(Object.getPrototypeOf(strObj) === String.prototype); //true

/*
    - 프로토타입 메서드와 정적메서드를 제공한다.
 */
// Number.prototype.toFixed 는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed());  //124

console.log(Number.isInteger(0.5)); //false

