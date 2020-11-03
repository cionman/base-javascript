// 008 Well-known Symbol

/*
    - 자바스크립트가 기본 제공하는 빌트인 심벌 값을 Well-known Symbol이라 부른다.
    - 예를 들어 Array, String, Map, Set, TypedArray, arguements, NodeList, HtmlCollection과 같이
    for..of문으로 순회 가능한 빌트인 이터러블은  Well-known Symbol인 Symbol.iterator를 키로 갖는 메서드를 가지며
    Symbol.iterator 메서드를 호출하면 이터레이터를 반환하도록 ECMAScript 사양에 규정되어 있다.
    - 빌트인 이터러블인 이규정 즉 이터레이션 프로토콜을 준수한다.

    - 빌트인 이터러블이 아닌 일반 객체를 이터러블 처럼 구현하고 싶으면 이터레이션 프로토콜을 따르면 된다.
    Symbol.iterator를 키로 갖는 메서드를 객체에 추가하고 이터레이터를 반환하도록 구현하면 그 객체는 이터러블이 된다.

 */

const iterable = {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
        return {
            next() {
                return { value: cur++, done: cur > max + 1 };
            }
        };
    }
};

for (const num of iterable) {
    console.log(num); // 1 2 3 4 5
}

/*
    - 이터레이션 프로토콜을 준수하기 위해 일반 객체에 추가해야하는 메서드의 키 Symbol.iterator는 기존 프로퍼티 키 또는 미래에 추가될 프로퍼티 키와
    절대 중복되지 않을 것이다.
    - 이처럼 심벌은 중복되지 않는 상수 값을 생성하는 것은 물론 기존에 작성된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해, 즉 하위 호환성을 보장하기 위해 도입되었다.

 */