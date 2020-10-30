//003 데이터 프로퍼티와 접근자 프로퍼티

/*
    - 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

    데이터 프로퍼티
    - 키와 값으로 구성된 일반적인 프로퍼티, 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.

    접근자 프로퍼티
    - 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.
 */

const person = {
    name: 'Lee'
};
console.log(Object.getOwnPropertyDescriptor(person, "name")); // 존재하지 않는 프로퍼티나 상속 받은 프로퍼티에 대한 정보를 요구하면 undefined를 반환
console.log(Object.getOwnPropertyDescriptors(person)); //ES8에서 도입된 메서드

