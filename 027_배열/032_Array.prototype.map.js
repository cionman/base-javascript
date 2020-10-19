// 032 Array.prototype.map
// 원본 유지

/*
 map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출하고, 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다.
 */
const numbers = [1, 4, 9];
const result = numbers.map(item => Math.sqrt(item));

console.log(numbers); //[ 1, 4, 9 ]
console.log(result); // [ 1, 2, 3 ]

/*
  - forEach, map의 공통 점은 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출
  - 다른 점은 forEach는 undefined, map은 콜백함수의 반환값으로 구성된 새로운 배열
 */
/*
  map메서드의 콜백함수를 호출하면 (요소값, 인덱스, this)의 인수를 전달한다.
 */
[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값 : ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});

/*
  forEach 메서드와 마찬가지로 map메서드의 두번째 인자로 map메서드의 콜백함수 내부에서 this로 사용할 객체를 전달할 수 있다
 */

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (item) {
            return this.prefix + item;
        }, this);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

/*
ES6 화살표 함수의 경우 상위 스코프의 this를 가진다.
 */

class Prefixer2 {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer2 = new Prefixer2('-webkit-');
console.log(prefixer2.add(['transition', 'user-select']));