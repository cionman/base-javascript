//001 Number 생성자 함수
/*
    - 표준 빌트인 객체인 Number객체는 생성자 함수 객체다.
    - new연산자와 함께 호출하여 Number인스턴스 생성
    - Number 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[NumberData]]내부 슬롯에 0을 할당한
    Number 래퍼 객체를 생성한다.
 */
const numObj = new Number();
console.log(numObj); //[Number: 0]

const numObj2 = new Number(10);
console.log(numObj2); //[Number: 10]

const numObj3 = new Number('test');
console.log(numObj3); //[Number: NaN]

/*
    - new 연산자를 사용하지 않고 Number 생성자 함수를 호출하면 Number인스턴스가 아닌 숫자를 반환한다.
 */

//문자열 타입 => 숫자 타입
console.log(Number('0')); //0
console.log(Number('10.53')); //10.53

//불리언 => 숫자
console.log(Number(true)); //1