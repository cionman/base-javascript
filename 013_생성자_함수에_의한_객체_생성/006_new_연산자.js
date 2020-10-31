// 006 new 연산자
/*
    - 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다.
    - new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.
    - 생성자 함수는 [[Call]]이 호출 되는 것이 아니라 [[Constructor]]가 호출된다.
 */

// 생성자 함수로 정의되지 않은 일반 함수
function add(x, y) {
    return x + y;
}

// 생성자 함수로서 정의되지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();
console.log(inst); //함수가 객체를 반환하지 않았으므로 반환문이 무시 된다. 빈 객체가 반환된다.

function createUser(name, role) {
    return { name, role };
}

inst = new createUser('Lee', 'admin');
console.log(inst); //{ name: 'Lee', role: 'admin' }