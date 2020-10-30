//005 접근자 프로퍼티
/*
    - 접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.
    - 접근자 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

    1. [[Get]]
    - 프로퍼티 디스크립터 객체의 프로퍼티 : get
    - 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자
    - 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 결과가 프로퍼티 값으로 반환된다.

    2. [[Set]]
    - 프로퍼티 디스크립터 객체의 프로퍼티 : set
    - 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다.
    - 즉 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 [[Set]]의 값, 즉 setter 함수가 호출되고 그결과가 프로퍼티 값으로 저장된다.

    3. [[Enumerable]] (데이터 프로퍼티와 동일)
    - 프로퍼티 디스크립터 객체의 프로퍼티 : enumerable
    - 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
    - [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for .. in 문이나 Object.keys 메서드 등으로 열거할 수 없다.

    4. [[Configurable]] (데이터 프로퍼티와 동일)
    - 프로퍼티 디스크립터 객체의 프로퍼티 : configurable
    - 프로퍼티의 재정의 가능 여부를 나타내는 불리언 값
    - [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다.
    단 [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]의 false로 변경하는 것은 허용된다.
 */

const person = {
    firstName: 'Won',
    lastName: 'Kim',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    //setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + ' ' + person.lastName); //Won Kim
person.fullName = 'Su Park';
console.log(person); //{ firstName: 'Su', lastName: 'Park', fullName: [Getter/Setter] }
console.log(person.fullName); //Su Park

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

/*
    위 예제 설명
    - person 객체의 firstName과 lastName은 데이터 프로퍼티다.
    - 메서드 앞에 get, set 이 붙은  메서드는 getter와 setter 함수다.
    - 함수의 이름 fullName이 접근자 프로퍼티다.
    - 접근자 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.

    fullName을 접근 하면 아래와 같이 동작한다.
    1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야한다. 프로퍼티 키 'fullName'은 문자열이므로 유효한 프로퍼티 키다.
    2. 프로토타입 체인에서 프로퍼티를 검색한다. person 객체에 fullName 프로퍼티가 존재한다.
    3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. fullName프로퍼티는 접근자 프로퍼티다.
    4. 접근자 프로퍼티 fullName의 프로퍼티 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다. 프로퍼티
    fullName의 프로퍼티 어트리뷰트 [[Get]] 의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 객체의 get 프로퍼티 값과 같다.
 */

