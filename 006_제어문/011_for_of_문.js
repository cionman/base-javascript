// 011 for .. of 문
/*
    - for of문 은 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다.
    - for of문은 내부적으로 이터레이터의  next메서드를 호출하여 이터러블을 순회하며 next메서드가 반환한
    이터레이터 리절트 객체의 value 프로퍼티 값을 for of문의 변수에 할당한다.
    - 이터레이터 리절트 객체의 done 프로퍼티 값이 false이면,  이터러블의 순회를 계속하고 true이면 순회를 중단한다.

 */

for (const item of [3, 4, 5]) {
    console.log(item); // 3 4 5
}

//for of 의 내부 동작을 for문으로 표현하면 아래와 같다.

const iterable = [4, 5, 6];
const iterator = iterable[Symbol.iterator]();
for (; ;) {

    //이터레이터의 next메서드를 호출하여 이터러블을 순회한다.
    //이 때 next메서드는 이터레이터의 리절트 객체를 반환한다.

    const res = iterator.next();

    //next 메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 true면 이터러블의 순회를 중단한다.
    if (res.done) break;

    // 이터레이터 리절트 객체의 value프로퍼티 값을 item 변수에 할당한다.
    const item = res.value;
    console.log(item); // 4 5 6
}