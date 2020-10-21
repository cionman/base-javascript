// 007 프로퍼티 값 갱신
/*
    - 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
 */

var person = {
    name: 'Lee'
};
console.log(person.name); //Lee

person.name = 'Kim';
console.log(person.name); //Kim

person['name'] = 'Choi';
console.log(person.name); //Choi
