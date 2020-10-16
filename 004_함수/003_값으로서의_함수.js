/*

- 함수는 객체
- 함수 선언문으로 함수를 선언하면 내부적으로 그 함수 이름을 변수 이름으로한 변수와 함수 객체가 만들어지고, 그 변수에 함수 객체의 참조가  저장됨
 */

function square(x) {
    return x * x;
}

var sq = square;
console.log(sq(5));

