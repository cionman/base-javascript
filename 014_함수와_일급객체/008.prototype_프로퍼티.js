// 008 prototype 프로퍼티
/*
    - prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.
 */

console.log((function () {
}).hasOwnProperty('prototype')); // true

//일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(({}).hasOwnProperty('prototype'));//false