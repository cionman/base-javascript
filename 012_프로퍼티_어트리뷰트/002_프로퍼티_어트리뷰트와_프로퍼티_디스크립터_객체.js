//002 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

/*
    - 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본 값으로 자동 정의한다.
    - 프로퍼티 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부,재정의 가능여부를 말한다.
    - 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부슬롯 [[Value]], [[Writable]], [[[Enummerable]], [[Configurable]]
    - Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.
 */

const person = {
    name: 'Lee'
};
console.log(Object.getOwnPropertyDescriptor(person, "name")); // 존재하지 않는 프로퍼티나 상속 받은 프로퍼티에 대한 정보를 요구하면 undefined를 반환
console.log(Object.getOwnPropertyDescriptors(person)); //ES8에서 도입된 메서드
