// 009 이터러블이면서 이터레이터인 객체를 생성하는 함수

/*
    - 이터레이터를 생성하려면 이터러블의 Symbol.iterator 메서드를 호출 해야한다.
    - 하지만 이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator 메서드를 호출 하지 않아도 된다.
    - 아래 객체는 Symbol.iterator 메서드와 next메서드를 소유한 이터르블 이면서 이터레이터다.


    // 이터러블이면서 이터레이터인 객체. 이터레이터를 반환하는 Symbol.iterator 메서드와
    // 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
    {
      [Symbol.iterator]() { return this; },
      next() {
        return { value: any, done: boolean };
      }
    }
 */


// 이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터인 객체를 반환
    return {
        [Symbol.iterator]() {
            return this;
        },
        // next 메서드는 이터레이터 리절트 객체를 반환
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
        }
    };
};

// iter는 이터러블이면서 이터레이터다.
let iter = fibonacciFunc(10);

// iter는 이터러블이므로 for...of 문으로 순회할 수 있다.
for (const num of iter) {
    console.log(num); // 1 2 3 5 8
}

// iter는 이터러블이면서 이터레이터다
iter = fibonacciFunc(10);

// iter는 이터레이터이므로 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next()); // { value: 8, done: false }
console.log(iter.next()); // { value: 13, done: true }