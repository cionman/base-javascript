// 031 Array.prototype.forEach


/*
    - forEach 메서드는 for문을 대체할 수 있는 고차 함수다.
    - forEach메서드는 자신의 내부에서 반복문을 실행한다.
    - forEach메서드는 반복문을 추상화한 고차함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야할 처리를 콜백함수로 전달 받아 반복 호출 한다.
 */

const numbers = [1, 2, 3];
const pows = [];
numbers.forEach(item => pows.push(item ** 2));
console.log(pows); // [1, 4, 9]

/*
  - forEach 메서드의 콜백함수는 호출한 배열의 요소 값과 인덱스, forEach 메서드를 호출한 배열 자체, 즉 this를 순차적으로 전달 받을 수 있다.
 */

[3, 5, 9].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스 ${index}, this : ${JSON.stringify(arr)}`);
});

/*
  - forEach메서드는 원본배열을 변경하지 않는다. 하지만 콜백함수를 통해 원본 배열을 변경할 수는 있다.
 */

numbers.forEach((item, index, arr) => {
    arr[index] = item ** 2;
});
console.log(numbers); // [ 1, 4, 9]

/*
  - forEach 메서드의 반환값은 언제나 undefined다.
 */
const result = [1, 2, 3].forEach(console.log);
console.log(result);


/*
    forEach 메서드의 두번째 인수로 forEach메서드의 콜백함수 내부에서 this로 사용할 객체를 전달 할 수 있다.
 */

/*
class Numbers {
    numberArray = [];

    multiply(arr) {
        arr.forEach(function (item) {
            /!*
              이 상태에서는 this는 undefined
              이유는 클래스 내부의 모든 코드에는 암묵적으로 strict mode가 적용되기 때문이다.
             *!/
            this.numberArray.push(item * item);
        });
    }
}
*/

class Numbers {
    numberArray = [];

    multiply(arr) {
        arr.forEach(function (item) {
            this.numberArray.push(item * item + 3); // [ 4, 7, 12 ]
        }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
    }
}


const numObject = new Numbers();
numObject.multiply([1, 2, 3]);
console.log(numObject.numberArray);

/*
  위 방법보다 더 나은 방법은 ES6의 화살표 함수를 사용하는 것이다.
  화살표함수 내부에서 this를 참조하면 상위 스코프, 즉 multiply메서드 내부의 this를 그대로 참조한다.

 */

class Numbers2 {
    numberArray = [];

    multiply(arr) {
        arr.forEach(item => this.numberArray.push(item * item + 3)); // [ 4, 7, 12 ]
    }
}


const numObject2 = new Numbers2();
numObject2.multiply([1, 2, 3]);
console.log(numObject2.numberArray);

// forEach 메서드는 for문과 달리 break, continue 문을 사용할 수 없다. 모두 순회하며 중간에 순회를 중단할 수 없다.
/*
[1, 2, 3].forEach(item => {
    console.log(item);
    if (item > 1) break; // Syntax Error
});

[1, 2, 3].forEach(item => {
    console.log(item);
    if (item > 1) continue; // Syntax Error
});
*/

/*
 - 희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외한다.
 - 이는 map, filter, reduce등의 메서드에서도 마찬가지다.
 */
const arr = [1, , 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(v => console.log(v)); //1, 3만 찍힘