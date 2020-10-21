// 010 ES6에서 추가된 객체 리터럴의 확장기능 계산된 프로퍼티 이름

//ES5
var prefix = 'prop';
var i = 0;
var obj = {};
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);

//ES6
// ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적으로 생성할 수 있다.
const obj2 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
};

console.log(obj2); //{ 'prop-4': 4, 'prop-5': 5, 'prop-6': 6 }