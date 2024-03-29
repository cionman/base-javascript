// 003 생성자 함수의 인스턴스 생성 과정

/*
    - 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화하는 것

    - 생성자 함수 내부의 코드를 살펴보면 this에 프로퍼티를 추가하고 필요에 따라 전달된 인수를 프로퍼티의 추기값으로 할당하여
    인스턴스를 초기화 한다.
    - 하지만 인스턴스를 생성하고 반환하는 코드는 보이지 않는다.
    - 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.

    인스턴스 생성 과정
    1. 인스턴스 생성과 this 바인딩
    2. 인스턴스 초기화
    3. 인스턴스 반환

 */

function Circle(radius) {
    // 1. 암묵적으로 빈 객체가 생성되고 this 에 바인딩 된다.

    // 2. this에 바인딩 되어 있는 인스턴스를 초기화 한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    //3. 완성된 인스턴스가 바인딩도니 this가 암묵적으로 반환된다.

    // 명시적으로 return으로 반환하면 암묵적인 this 반환이 무시된다.
}

// 인스턴스 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성

