// 018 프로퍼티 열거 Object.keys/values/entries
/*
    - for in 문은 객체 자신의 고유 프로퍼티 뿐아니라 상속받은 프로퍼티도 열거한다.
    고유 프로퍼티만을 위한 코드를 작성하려면 Object.hasOwnProperty메서드를 사용하여 확인하는 추가 처리가 필요하다.

    - Object.keys/values/entries메서드는 객체 자신의 고유 프로퍼티만 열거한다.

 */

const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
};

console.log(Object.keys(person)); // ["name", "address"]

//ES8에서 도입된 Object.values 메서드를 활용하면 열거 가능한 프로퍼티 값을 배열로 반환한다.
console.log(Object.values(person)); // [ 'Lee', 'Seoul' ]

//ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
console.log(Object.entries(person)); // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]

Object.entries(person).forEach(([key, value]) => console.log(key, value));



