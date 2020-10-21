// 003 객체 리터럴
/*
    - 객체 리터럴은 중괄호 내에 0개 이상의 프로퍼티를 정의 한다.
    - 객체 리터럴은 자바스크립트의 유연함과 강력함을 대표하는 객체 생성 방식이다. 객체를 생성하기 위해 클래스를 먼저 정의하고 new 연산자와 함께 생성자를 호출할 필요 없다.
    - 숫자 값이나 문자열을 만드는 것과 유사하게 리터럴로 객체를 생성한다.
 */
var person = {
    name: "Lee",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); //object
console.log(person);
person.sayHello();

/*
    - 중괄호 내에 프로퍼티를 정의 하지 않으면 빈 객체가 된다.
 */
var empty = {};
console.log(typeof empty);