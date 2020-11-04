// 010 무한 이터러블과 지연 평가
/*
    - 무한을 구현 하기 위해 done 프로퍼티를 생략
    - 지연 평가를 통해 데이터를 생성 한다.
    - 지연 평가는 데이터가 필요한 시점 이전 까지는 미리 데이터를 생성하지 않다가
    데이터가 필요한 시점이 되면 그때야 비로소 데이터를 생성하는 기법
    - 지연 평가를 사용하면 불필요한 데이터를 미리 생성하지 않고 필요한 데이터를 필요한 순간에 생성하므로
    빠른 실행속도를 기대할 수 있고, 불필요한 메모리를 소비하지 않으며 무한도 표현할 수 있다는 장점이 있다.

 */

// 무한 이터러블을 생성하는 함수
const fibonacciFunc = function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];
            // 무한을 구현해야 하므로 done 프로퍼티를 생략한다.
            return { value: cur };
        }
    };
};

// fibonacciFunc 함수는 무한 이터러블을 생성한다.
for (const num of fibonacciFunc()) {
    if (num > 10000) break;
    console.log(num); // 1 2 3 5 8...4181 6765
}

// 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득한다.
const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3); // 1 2 3