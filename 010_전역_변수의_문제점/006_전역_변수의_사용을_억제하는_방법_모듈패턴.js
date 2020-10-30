//006 전역 변수의 사용을 억제하는 방법

/*
    - 전역 변수를 반드시 사용해야할 이유를 찾지 못한다면 지역 변수를 사용해야한다.
    - 변수의 스코프는 좁을 수록 좋다.

 */

/*
    3. 모듈 패턴
        - 클래스를 모방해서 관련있는 변수와 함수를 모아 즉시 실행함수로 감싸 하나의 모듈을 만든다.
        - 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다.
        - 모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다는 것이다.

 */

var Counter = (function () {
    var num = 0; //private 변수가 된다. 노출되지 않는다.

    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log(Counter.num); //undefined
console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0