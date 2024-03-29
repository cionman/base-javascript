//001 내부 슬롯과 내부 메서드

/*
    - 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는
    의사 프로퍼티와 의사 메서드다. ECMAScript 사양에 등장하는 이중 대괄호로 감싼 이름들이 내부 슬롯과 내부 메서드다.

    - 내부 슬롯과 내부 메서드는 ECMAScript 사양에 정의된 대로 구현되어 자바스크립트 엔진에서 실제로 동작하지만
    개발자가 직접 접근 할 수 있도록 외부로 공개된 객체의 프로퍼티는 아니다.
    - 일부 내부 슬롯과 내부메서드에 한해 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
    - 예 :  [[Prototype]]이라는 내부 슬롯을 갖는데 해당 내부슬롯은 __proto__를 통해 간접적으로 접근할 수 있다.
 */

const o = {};
//console.log(o.[[Prototype]]) //SyntaxError
console.log(o.__proto__); // 브라우저와 노드 출력이 다르다 노드는 단순 {} 브라우저는 Object.prototype의 정보



