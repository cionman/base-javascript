/*
- 함수는 원시 값을 인수로 넘겼을 때와 객체를 인수로 넘겼을 때 다르게 동작
 */

// 원시 값을 넘겼을때

function add1(x) {
    return x = x + 1;
}

var a = 3;
var b = add1(a);
console.log(`a = ${a}, b = ${b}`);

function add2(p) {
    p.x = p.x + 1;
    p.y = p.y + 1;
    return p;
}

var c = { x: 3, y: 4 };
var d = add2(c);

console.log(c, d);
