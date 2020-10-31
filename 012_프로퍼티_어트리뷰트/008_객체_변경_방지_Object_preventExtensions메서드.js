// 008 객체 변경 방지 Object.preventExtensions메서드

/*
    - 프로퍼티 추가가 금지된다.
 */

const person = { name: 'Lee' };

//person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); //true

//확장을 금지 시킨다.
Object.preventExtensions(person);

//person 객체는 확장이 금지된 객체다
console.log(Object.isExtensible(person)); //false

person.age = 20;  //무시,  strict 모드에서는 에러 발생
console.log(person); //{ name: 'Lee' }

//Object.defineProperty(person, 'age', { value: 30 }); // TypeError: Cannot define property age, object is not extensible


