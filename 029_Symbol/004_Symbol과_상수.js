// 004 Symbol과 상수

const Direction = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
};

const myDirection = Direction.UP;
if (myDirection === Direction.UP) {
    console.log('You are going up');
}
/*
    - 위 예제와 같이 값에는 특별한 의미가 없고, 상수 이름 자체에 의미가 있는 경우가 있는데
    문제는 상수 값 1, 2, 3, 4는 변경될 수 있으며 다른 변수 값과 중복될 수 있다.
    - 이러한 경우 변경 중복될 가능성이 있는 무의미한 상수 대신 중복 가능성이 없는 심벌 값을 사용할 수 있다.
 */

const Direction2 = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT'),
};

const myDirection2 = Direction2.UP;
if (myDirection2 === Direction2.UP) {
    console.log('You are going up');
}
/*
    - enum은 명명된 숫자 상수의 집합으로 열거형이라고 부른다. 자바스크립트는 enum을 지원하지 않지만,
    다른 언어에서는 많이 지원한다.
    - 자바스크립트에서 enum을 흉내내어 사용하려면 다음과 같이 객체의 변경을 방지 하기 위해 객체를 동결하는
    Object.freeze메서드와 심벌 값을 사용한다.


 */

// JavaScript enum
// Direction 객체는 불변 객체이며 프로퍼티는 유일무이한 값이다.
const Direction3 = Object.freeze({
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
});
