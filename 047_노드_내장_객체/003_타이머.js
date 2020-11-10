//003 타이머
/*
    - setTimeOut(콜백함수, 밀리초) : 주어진 밀리초 이후에 콜백함수를 실행
    - setInterval(콜백함수, 밀리초): 주어진 밀리초 콜백함수를 반복 실행
    - setImmediate(콜백함수) : 콜백함수를 즉시 실행
    - 위 3개 함수는 모두 아이디 값을 반환, 아이디를 사용하여 타이머를 취소할 수 있음

    - clearTimeOut(아이디) : setTimeOut을 취소
    - clearInterval(아이디) : setInterval을 취소
    - clearImmediate(아이디): setImmediate를 취소

 */

// 실행 순서를 예측 해보시오.
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});
clearImmediate(immediate2);