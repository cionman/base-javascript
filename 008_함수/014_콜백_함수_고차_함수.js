// 014 콜백 함수, 고차 함수
/*
    - 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라한다.
    - 매개 변수를 통해 함수의 외부에서 콜백함수를 전달 받은 함수를 고차 함수라 한다.
    - 중첩 함수는 고정되어 있어서 교체하기 곤란하지만, 콜백함수는 함수 외부에서 고차함수 내부로 주입하기 때문에 자유롭게 교체할 수 있는 장점이 있다.
    - 고차 함수는 콜백함수를 자신의 일부분으로 합성한다.
    - 고차 함수는 매개변수를 통해 전달받은 콜백함수의 호출시점을 결정해서 호출 한다.
    - 콜백함수는 고차함수에 의해 호출되며 고차함수는 필요에 따라 콜백함수에 인수를 전달할 수 있다.
 */

// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

// 익명함수 리터럴을 콜백함수로 고차함수에 전달한다.
// 익명함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
    if (i % 2) console.log(i);
}); // 1 3

/*
    - 콜백함수를 다른 곳에서도 호출할 필요가 있거나, 콜백함수를 전달 받는 함수가 자주 호출된다면 함수 외부에 콜백함수를 정의한 후
    함수 참조를 고차함수에 전달하는 편이 효율 적이다.
 */
var logOdds = function (i) {
    if (i % 2) console.log(i);
};
repeat(5, logOdds); //1 3


// 콜백 함수는 함수형 프로그래밍 패러다임 뿐만 아니라 비동기 처리에 활용되는 중요 패턴이다.