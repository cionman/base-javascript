// 002 함수 호출문의 인수 목록에서 사용하는 경

const arr = [1, 2, 3];

console.log(Math.max(1)); // 1
console.log(Math.max(1, 2)); // 2
console.log(Math.max(1, 2, 3)); //3

//Math.max 함수에 숫자가 아닌 배열을 인수로 전달하면 최대값을 구할 수 없으므로 NaN을 반환한다.
console.log(Math.max([1, 2, 3])); // NaN

// 스프레드 문법이 제공되기 이전에는 배열을 펼쳐서 요소들의목록을 함수의 인수로 전달하고 싶은 경우 Function.prototype.apply를 사용했다.
//apply 함수의 2번째 인수(배열)는 apply함수가 호출하는 함수의 인수 목록이다.
//따라서 배열이 펼져서 인수로 전달되는 효과가 있다.
console.log(Math.max.apply(null, arr));// 3

// 스프레드 문법을 사용하면 더 간결하고 가독성이 좋다.
console.log(Math.max(...arr)); //3

/*
    - Rest 파라미터와 형태가 동일하여 혼동할 수 있으므로 주의 필요
    - Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 붙이는 것
    - 스프레드 문법은 여러개의 값이 하나로 뭉쳐있는 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것
    - Rest 파라미터와 스프레드 문법은 서로 반대 개념이다.
 */

function foo(...rest) {
    console.log(rest);
}

foo(1); //[1]
foo([1, 2, 3]); // [ [ 1, 2, 3 ] ]
foo(...[1, 2, 3]); // [  1, 2, 3  ]

