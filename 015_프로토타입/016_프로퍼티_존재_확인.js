// 016 프로퍼티 존재 확인

/*
    1. in 연산자
    - in 연산자는 객체내에 특정 프로퍼티가 존재하는지 여부를 확인한다.
 */

const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log('name' in person); //true
console.log('address' in person); //true
console.log('age' in person); //false

// in 연산자가 person 객가 속한 프로토타입 체인상에서 존재하는 모든 프로토타입에서 toString 프로퍼티를 갬색했기때문이다.
// toString은 Object.prototype의 메서드다.
console.log('toString' in person); //true

/*
    2. Reflect.has 메서드
    - ES6에서 도입
    - in 연산자와 동일하게 동작
 */

console.log(Reflect.has(person, 'toString')); //true
console.log(Reflect.has(person, 'name')); //true

/*
    3. Object.prototype.hasOwnProperty 메서드
    - 프로퍼티 키가 객체 고유의 프로퍼티인 경우에만 true 를 반환한다. 상속받은 프로퍼티는  false 임에 유의

 */

console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('age')); //false
console.log(person.hasOwnProperty('toString')); //false
