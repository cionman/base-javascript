// 013 instanceof 연산자

/*
    - 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다.
    - 만약 우변의 피연산자가 함수가 아닌 경우 TypeError를 발생시킨다.
    - 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인상에 존재하면 true 로 평가되고
    그렇지 않은 경우 false로 평가 된다.
    - 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인상에 존재하는지 확인한다.
 */

function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

//Person.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true로 평가된다.
console.log(me instanceof Person); // true

//Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true로 평가된다.
console.log(me instanceof Object); // true