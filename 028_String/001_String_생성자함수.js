// 001 String 생성자 함수

/*
    - 표준 빌트인 객체인 String 객체는 생성자 함수 객체다.
    - new 연산자와 함께 호출하여 String 인스턴스를 생성할 수 있다.
    - String 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[StringData]] 내부 슬롯에 빈 문자열을 할당한
    String 래퍼 객체를 생성한다.
 */

const strObj = new String();
console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}

const strObj2 = new String('Lee');
console.log(strObj2);
// String {0: "L", 1: "e", 2: "e", length: 3, [[PrimitiveValue]]: "Lee"}

/*
    - String 래퍼 객체는 배열과 마찬가지로 length 프로퍼티와 인덱스를 나타내는 숫자형식의 문자열 프로퍼티 키로,
    각 문자를 프로퍼티 값으로 갖는 유사 배열 객체면서 이터러블이다.
    - 배열과 유사하게 인덱스를 사용하여 각 문자에 접근할 수 있다.
 */
console.log(strObj2[0]); //L

//단 문자열은 원시 값이므로 변경할 수 없다. 에러는 발생하지 않는다.
strObj2[0] = 'S';
console.log(strObj2); // [String: 'Lee']

/*
    - String 생성자 함수의 인수로 문자열이 아닌 값을 전달하면 인수를 문자열로 강제 변환한 후 객체를 생성한다.
 */
let strObj3 = new String(123);
console.log(strObj3);
// String {0: "1", 1: "2", 2: "3", length: 3, [[PrimitiveValue]]: "123"}

strObj3 = new String(null);
console.log(strObj3);
// String {0: "n", 1: "u", 2: "l", : "l", length: 4, [[PrimitiveValue]]: "null"}

/*
    - new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 인스턴스가 아닌 문자열을 반환한다.
    - 명시적으로 타입변환할 때 사용한다.
 */
console.log(String(1)); // 1
console.log(String(NaN)); // NaN
console.log(String(true)); // true
