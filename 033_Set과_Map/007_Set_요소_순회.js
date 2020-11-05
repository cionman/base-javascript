//007 Set 요소 순회
/*
    - Set 객체의 요소를 순회하려면 Set.prototype.forEach메서드를 사용한다.
    - 콜백 인수 3개의 인수를 전달 받는다.
        1. 첫번째 인수 :  현재 순회중인 요소 값,
        2. 두번째 인수 :  현재 순회중인 요소 값,
        3. 세번째 인수 :  현재 순회중인 Set 객체 자체,
    - 첫번째 인수와 두번째 인수는 같은 값이다.
    - 이처럼 동작하는 이유는 Array.prototype.forEach메서드와 인터페이스를 통일하기 위함이며 다른 의미는 없다.
    - Array.prototype.forEach 메서드는 두번째 인수로 인덱스를 받지만 Set에서는 인덱스를 가지지 않는다.

    - Set 객체는 이터러블이다. for of로도 순회 가능 하다.
 */

const set = new Set([1, 2, 3]);
/*
    1 1 Set { 1, 2, 3 }
    2 2 Set { 1, 2, 3 }
    3 3 Set { 1, 2, 3 }
 */
set.forEach((v, v2, set) => console.log(v, v2, set));

/*
    - Set 객체는 이터러블이다.
    - for of 로 순회 할 수 있다.
    - 스프레드 문법과 배열 디스트럭처링의 대상이 될 수 있다.

 */

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set); // true

// 이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const value of set) {
    console.log(value); // 1 2 3
}

// 이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...set]); // [1, 2, 3]

// 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, ...rest] = [...set];
console.log(a, rest); // 1, [2, 3]

// Set 객체의 요소의 순서에 의미를 갖지 않지만 Set 객체를 순회하는 순서 요소가 추가된 순서를 따른다.
// 이는 ECMAScript 사양에 규정되어 있지는 않지만 다른 이터러블의 순회와 호환성을 유지하기 위함이다.