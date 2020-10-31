// 003 arguments 프로퍼티

function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2, 넘쳐도 에러 나지 않는다.

/*
    - arguments 객체의 Symbol 프로퍼티는 arguments 객체를 순회 가능한 자료 구조인 이터러블로 만들기 위한 프로퍼티다.
    - Symbol.iterator를 프로퍼티 키로 사용한 메서드를 구현하는 것에 의해 이터러블이 된다.

 */
function multiply2(x, y) {
    const iterator = arguments[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

multiply2(1, 2, 3);

function sum() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum()); //0
console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5)); // 15

function sum2() {
    // array 객체를 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum2(3, 4)); //7

//ES6 에서는 Rest 파라미터(나머지 인자, 나머지 파라미터) 를 도입
function sum3(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum3(3, 5)); //8
