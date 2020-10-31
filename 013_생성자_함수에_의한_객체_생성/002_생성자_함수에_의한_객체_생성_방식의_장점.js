// 002 생성자 함수에 의한 객체 생성방식의 장점

/*
    - 생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 템플릿(클래스) 처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체를 여러개 간편하게 생성할 수 있다.
 */

// 생성자 함수

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20


/*
    - this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수다.
    - this가 가리키는 값, 즉 this 바인딩은 함수 호출 발ㅇ식에 따라 동적으로 결정된다.

    - 일반 함수로 호출에서 this : 전역 객체
    - 메서드로서 호출에서 this : 메서드를 호출한 객체
    - 생성자 함수로서 호출에서 this : 생성자 함수가 생성할 인스턴스

 */

function foo() {
    console.log(this);
}

foo(); // Object [global], 브라우저에서는 window

const obj = { name: '이름', foo }; // ES6 축약표현
obj.foo(); // obj { name: '이름', foo: [Function: foo] }

const inst = new foo(); // foo {}

/*
    - new 연산자와 함께 호출하면 해당함수는 생성자 함수로 동작한다.
    - new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
 */

const circle3 = Circle(15);

console.log(circle3); //undefined
console.log(radius); //15 일반 함수로서 호출된 Circle내의 this는 전역 객체를 가리킨다.

