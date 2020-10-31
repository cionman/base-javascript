// 007 new.target

/*
    - 생성자 함수가 new 연산자 없이 호출 되는 것을 방지하기 위해 관용적으로 파스칼 케이스 컨벤션을 사용한다.
    - 하지만 실수는 언제나 발생할 수 있고, 이러한 위험성을 회피하기 위해 ES6에서는 new.target을 지원한다.
    - new.target는 this와 유사하게 constructor인 모든 함수 내에서 암묵적인 지역변수와 같이 사용되며 메타 프로퍼티라고 부른다.
    - IE에서는 지원하지 않는다.
    - 함수내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지를 확인할 수 있다.
    - new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
    - new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.
 */

// 생성자 함수
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.traget 은 undefined다.
    if (!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 인스턴스를 반환한다.
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());

/*

    - ie에서 지원하지 않는다.
    - new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있다.

    스코프 세이프 생성자 패턴
 */

function Circle2(radius) {
    // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    // this에 바인딩한다. 이때 this와 Circle은 프로토타입에 의해 연결된다.

    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    // 즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if (!(this instanceof Circle)) {
        // new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle2 = Circle2(5);
console.log(circle2.getDiameter()); // 10