// 008 프로퍼티 동적 생성

/*
    존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 값이 할당된다.
 */

var person = {
    name: 'Lee'
};
console.log(person); //{ name: 'Lee' }

person.age = 20;
console.log(person); //{ name: 'Lee', age: 20 }

person['address'] = 'Seoul';
console.log(person);  // { name: 'Lee', age: 20, address: 'Seoul' }
