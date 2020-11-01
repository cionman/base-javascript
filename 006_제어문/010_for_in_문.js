// 010 for .. in 문

/*
    - 객체의 모든 프로퍼티를 순회하며 열거하려면 for...in 문을 사용한다.
    - for in 문은 객체의 프로퍼티 개수만큼 순회한다.
    - 순회대상 객체의 프로퍼티 뿐만아니라 상속받은 프로토 타입의 프로퍼티까지 열거한다.
    - 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지는 않는다.
    - for in 문은 객체의 프로토타입 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트가 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.
    - 상속받은 프로퍼티는 제외하고 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty메서드를 사용해야한다.
    - for in 문은 프로퍼티를 열거할 때 순서를 보장하지 않으므로 주의 필요
    - 하지만 대부분의 모던 브라우저는 순서를 보장하고 숫자인 프로퍼티 키에 대해서는 정렬을 실시한다.
    - 배열에는 for in 을 사용하지말고 일반적인 for문이나 for of 문 또는 Array.prototype.forEach메서드를 권장한다.
    (배열도 객체이므로 프로퍼티와 상속 받은 프로퍼티가 포함될 수 있다.)


    for(변수 선언문 in 객체)
 */

const person = {
    name: 'Lee',
    address: 'Seoul'
};

for (const key in person) {
    console.log(key + ':' + person[key]);
}

const person2 = {
    name: 'Kim',
    address: 'Daejun',
    __proto__: { age: 20 } //

};
console.log(person2);

for (const key in person2) {
    console.log(key + ':' + person2[key]);
}

// for in문은 프로퍼티가 심벌인 프로퍼티는 열거하지 않는다.
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};
for (const key in obj) {
    console.log(key + ': ' + obj[key]);
}

//    - 상속받은 프로퍼티는 제외하고 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty메서드를 사용해야한다.
for (const key in person2) {
    if (!person2.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person2[key]);
}
/*
    - 배열에는 for in 을 사용하지말고 일반적인 for문이나 for of 문 또는 Array.prototype.forEach메서드를 권장한다.
    (배열도 객체이므로 프로퍼티와 상속 받은 프로퍼티가 포함될 수 있다.)
 */

const arr = [4, 5, 6];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
    console.log(arr[i]); // 4 5 6 10
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 4 5 6
}

arr.forEach(v => console.log(v)); //4 5 6

// for of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
    console.log(value); // 4 5 6
}