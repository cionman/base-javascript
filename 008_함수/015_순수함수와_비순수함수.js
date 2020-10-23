// 015 순수 함수와 비순수 함수
/*
    순수함수
    - 동일한 인수가 전달되면 언제나 동일한 값을 반환하는 함수
    - 외부상태에 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환 값을 만든다.
    - 외부 상타에 의존하지 않으며, 외부 상태를 변경하지도 않는 함수
 */

var count = 0;

// 순수함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
    return ++n;
}

// 순수 함수가 반환한 결과 값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

/*
    비순수 함수
    - 외부 상태에 따라 반환 값이 달라지는 함수
    - 외부 상태에 의존하는 함수
    - 외부 상태를 변경하는 부수효과가 있는 함수
 */

var count2 = 0;

function increase2() {
    return ++count2;
}

increase2();
console.log(count2); //1
increase2();
console.log(count2); //2
increase2();
console.log(count2); //3