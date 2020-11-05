// 003 배열 리터럴 내부에서 사용하는 경우

/*
        1. concat
 */
//ES5에서는 2개의 배열을 1개의 배열로 결합하고 싶은 경우에는 concat 메서드를 사용한다.

var arr = [1, 2].concat([3, 4]);
console.log(arr); // [ 1, 2, 3, 4 ]

//ES6 스프레드 문법

const arr2 = [...[1, 2], ...[3, 4]];
console.log(arr2); // [ 1, 2, 3, 4 ]

/*
    2. splice
 */

// ES5 에서 어떤 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하려면 splice 메서드를 사용한다.

var arr3 = [1, 4];
var arr4 = [2, 3];

arr3.splice(1, 0, arr4);

console.log(arr3); // [ 1, [ 2, 3 ], 4 ]

// 해체해서 전달 해야한다.
arr3 = [1, 4];
arr4 = [2, 3];

Array.prototype.splice.apply(arr3, [1, 0].concat(arr4));
console.log(arr3); // [ 1, 2, 3, 4 ]

//ES6
arr3 = [1, 4];
arr4 = [2, 3];
arr3.splice(1, 0, ...arr4);
console.log(arr3); // [ 1, 2, 3, 4 ]