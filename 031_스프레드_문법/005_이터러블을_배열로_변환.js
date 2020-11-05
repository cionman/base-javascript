// 005 이터러블을 배열로 변환

// ES5에서 이터러블을 배열로 변환하려면 Function.prototype.apply 또는 Function.prototype.call메서드를 사용하여 slice메서드를 호출해야한다.

function sum() {
    // 이터러블 이면서 유사배열 객체인 arguments를 배열로 변환
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3)); //6

// 이터러블이 아닌 유사배열 객체도 배열로 변환할 수 있다.

const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
const arr = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arr)); //true

// ES6 스프레드 문법을 사용하면 좀 더 간편하게 이터러블을 배열로 변환할 수 있다.
function sum2() {
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum2(1, 2, 3)); //6

//위 예제 보다 나은 방법은 Rest 파라미터를 사용하는 방법이다.
const sum3 = (...args) => args.reduce((pre, cur) => pre + cur, 0);

// 이터러블이 아닌 유사배열 객체는 스프레드 문법의 대상이 될 수 없다.
//const arr2 = [...arrayLike]; //TypeError: object is not iterable

// 이터러블이 아닌 유사 배열 객체를 배열로 변경하려면 ES6에서 도입된 Array.from 메서드를 사용한다.
console.log(Array.from(arrayLike)); // [ 1, 2, 3 ]