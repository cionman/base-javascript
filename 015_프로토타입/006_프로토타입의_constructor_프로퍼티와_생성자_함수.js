// 006 프로토타입의 constructor 프로퍼티와 생성자 함수
/*
    - 모든 프로토타입은 constructor 프로퍼티를 갖는다.
    - constructor 프로퍼티는 prototype프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
 */

function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

console.log(me.constructor === Person); //true

/*
    - 위 예제에서 Person 생성자 함수는 me 객체를 생성했다.
    - me 객체는 프로토타입의 constructor 프로퍼티를 통해 생성자 함수와 연결된다.
    - me 객체에는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Person.prototype에는
    constructor 프로퍼티가 있다.
 */