// 009 프로퍼티 삭제

/*
    - delete 연산자는 객체의 프로퍼티를 삭제한다.
    - 이 때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야한다.
    - 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.
 */

var person = {
    name: 'Lee',
    age: 20
};

console.log(person); //{ name: 'Lee', age: 20 }

delete person.age;
console.log(person); //{ name: 'Lee' }

delete person.address;
console.log(person); //{ name: 'Lee' }