// 016 delete 연산자

/*
    - 객체의 프로퍼티를 삭제한다.
    - 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.

 */

var person = {
    name: 'Lee'
};
person.age = 20;

console.log(person); //{ name: 'Lee', age: 20 }

delete person.age;
console.log(person); //{ name: 'Lee' }

delete person.address;
console.log(person); //{ name: 'Lee' }
