//008 process.nextTick(콜백)

/*
    - 이벤트 루프가 다른 콜백함수들 보다 nextTick의 콜백함수를 우선 처리하도록 만듭니다.
    - process.nextTick은 setImmediate나 setTimeout 보다 먼저 실행됨
    - 코드 맨아래 Promise resolve도 다른 콜백들 보다 우선시됨
    - process.nextTick과 Promise를 마이크로태스크라고 따로 구분지어 부름
 */
setImmediate(() => {
    console.log('immediate');
});


setTimeout(() => {
    console.log('timeout');
}, 0);


Promise.resolve().then(_ => console.log('promise'));

process.nextTick(() => {
    console.log('nextTick');
});

