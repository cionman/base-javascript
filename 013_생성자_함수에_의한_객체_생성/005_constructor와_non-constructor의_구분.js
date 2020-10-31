// 005 constructor와 non-constructor의 구분

/*
    - constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
    - non-constructor : 메서드(ES6 메서드 축약표현), 화살표 함수

    - 이 때 주의 할 것은 ECMAScript 사양에서 메서드로 인정하는 범위가 일반적인 의미의 메서드보다 좁다는 것
 */

// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {
}

const bar = function () {
};

// 프로퍼티 x의 값으로 할당된 것은 일반함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
    x: function () {
    }
};

// 일반 함수로 정의된 함수 만이 constructor다.
console.log(new foo()); //foo {}
console.log(new bar()); // bar {}
console.log(new baz.x()); // x {}

const arrow = () => {
};
// new arrow(); //TypeError: arrow is not a constructor

//메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x() {
    }
};
//console.log(new obj.x()); //TypeError: obj.x is not a constructor