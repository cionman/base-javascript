// 010 ES6에서 추가된 객체 리터럴의 확장기능 프로퍼티 축약 표현

//ES5
var x = 1, y = 2;
var obj = {
    x: x,
    y: y
};
console.log(obj); //{ x: 1, y: 2 }

//ES6
// 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
let i = 1, j = 2;
const obj2 = { i, j };
console.log(obj2); //{ i: 1, j: 2 }
