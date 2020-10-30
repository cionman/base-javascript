//006 프로퍼티 정의

/*
    - 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.
    - Object.defineProperty메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.

    프로퍼티 어트리뷰트의 값을 생략했을때 기본값
    value -> undefined
    get -> undefined
    set -> undefined
    writable -> false
    enumerable -> false
    configurable -> false
 */

const person = {};
Object.defineProperty(person, 'firstName', {
    value: 'Brandon',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'James',
});

console.log(Object.getOwnPropertyDescriptor(person, 'firstName'));

//디스크립터 객체의 프로퍼티를 누락시키면  false가 기본 값이다.
console.log(Object.getOwnPropertyDescriptor(person, 'lastName'));

//[[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); //[ 'firstName' ]

person.lastName = 'Kim'; // [[Writable]]이 false이므로 값을 변경할 수 없다. 값을 변경하려하면 에러는 나지 않고 무시된다.
console.log(person.lastName); //James

//[[Configurable]]이 false인 경우 삭제할수 없다.
//에러나지 않고 무시된다.
delete person.lastName;
console.log(person.lastName);//James

// [[Configurable]]이 false인 경우 재정의할수 없다.
//TypeError 발생
// Object.defineProperty(person, 'lastName', { enumerable: true }); //TypeError: Cannot redefine property: lastName


//접근자 프로퍼티 정의

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
person.fullName = 'Melon Song';
console.log(person);

/*
    - Object.defineProperties 메서드를 사용하면 여러개의 프로퍼티를 한번에 정의할 수 있다.
 */

const person2 = {};
Object.defineProperties(person2, {
    firstName: {
        value: 'Spark',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'Jim',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },

        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

console.log(person2);
