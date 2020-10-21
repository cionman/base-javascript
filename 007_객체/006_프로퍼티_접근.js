// 006 프로퍼티 접근

/*
    - 마침표 프로퍼티 접근 연산자를 사용하는 마침표 표기법
    - 대괄호 프로퍼티 접근 연산자를 사용하는 대괄호 표기법
 */

var person = {
    name: 'Lee'
};
console.log(person.name); //Lee
console.log(person['name']); //Lee

//console.log(person[name]); // ReferenceError: name is not defined

//객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.
console.log(person.age); //undefined

var saram = {
    'last-name': 'Kim',
    1: 10
};

console.log(saram['last-name']);// Kim
// saram.'last-name' //SyntaxError