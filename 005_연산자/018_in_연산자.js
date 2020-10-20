// 018 in 연산자
/*
  in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.
 */

const person = {
    name: "Lee",
    address: "Seoul",
};

console.log('name' in person); //true
console.log('address' in person); //true
console.log('age' in person); //false
/*
  in 연산자는 확인 대상 객체의 프로퍼티 뿐만 아니라 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요함
 */
console.log('toString' in person); //true 모든 프로퍼티에 존재

/*
 - in 연산자 대신에 ES6에서 도임된 Reflect.has 메서드를 사용할 수있다.
 */
console.log(Reflect.has(person, 'name')); //true
console.log(Reflect.has(person, 'age')); //false