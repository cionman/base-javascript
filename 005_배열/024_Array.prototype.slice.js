// 024 Array.prototype.slice
// 원본 유지

/*
    Array.prototype.slice(start, end)

    start :
        - 복사를 시작할 인덱스다.
        - 음수인 경우 배열의 끝에서 인덱스를 나타낸다. 예를 들어 slice(-2) 는 배열의 마지막 2개의 요소를 복사하여 배열로 반환한다.

    end :
        - 복사를 종료할 딘덱스다. 해당 인덱스의 요소는 복사되지 않는다.
        - end는 생략 가능하며, 생략시 기본값은 length 프로퍼티 값이다.
 */

const arr = [1, 2, 3];
console.log(arr.slice(0, 1)); // [1]
console.log(arr.slice(1, 2)); // [2]
console.log(arr.slice(-1)); // [3]
console.log(arr.slice(-2)); // [2, 3]

console.log(arr); // [1, 2, 3]


//인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
//이때 생성된 복사본은 얕은 복사를 통해 생성된다.
// slice메서드, 스프레드 문법, Object.assign 메서드는 모두 얕은 복사를 수행한다. 깊은 복사를 위해서는 Lodash 라이브러리의 cloneDeep메서드를 사용하는 것을 추천한다.
const copy = arr.slice();
console.log(copy); // [ 1, 2, 3 ]
console.log(copy === arr); // false

const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'css', completed: true },
    { id: 3, content: 'javascript', completed: false },
];

const _todos = todos.slice();

// _todos와 todos는 참조값이 다른 별개의 객체다.
console.log(_todos === todos); //false

// 배열 요소의 참조 값이 같다. 즉, 얕은 복사가 되었다.
console.log(_todos[0] === todos[0]); //true

/*
    slice 메서드가 복사본을 생성하는 것을 이용하여 arguments, HTMLCollection, NodeList와 같은 유사 배열 객체를 배열로 변환할 수 있다
 */
function sum1() {
    var arr = Array.prototype.slice.call(arguments); // 함수 파라미터
    console.log(arr);
    return arr.reduce((pre, cur) => pre + cur, 0);
}

/**
 Array.from 메서드는 유사배열 객체 또는 이터러블 객체를 배열로 변환한다.
 */
function sum2() {
    var arr = Array.from(arguments);
    return arr.reduce((pre, cur) => pre + cur, 0);
}

/*
 es6 스프레드 문법을 사용하여 배열로 변환
 */
function sum3() {
    var arr = [...arguments];
    return arr.reduce((pre, cur) => pre + cur, 0);
}

// sum1, sum2, sum3는 동일한 기능을 하는 함수
console.log(sum1(1, 2, 3));
console.log(sum2(1, 2, 3));
console.log(sum3(1, 2, 3));
