// 003_Symbol.for Symbol.keyFor 메서드

/*
    - Symbol.for 메서드는 인수로 전달 받은 문자열을 키로 사용하여 키워 심벌 값의 쌍들이 저장되어 있는
    전역 심벌 레지스트리에서 해당 키와 일치하는 심벌 값을 검색한다.
    - 검색에 성공하면 새로운 심벌 값을 생성하지 않고 검색된 심벌 값을 반환한다.
    - 검색에 실패하면 새로운 심벌 값을 생성하여 Symbol.for 메서드의 인수로 전달된 키로 전역 심벌 레지스트리에 저장한 후 생성된 심벌 값을 반환한다.
 */
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2); //true

//Symbol.keyFor메서드를 사용하면 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.
console.log(Symbol.keyFor(s1)); // mySymbol

//Symbol 함수를 호출 하여 생성 한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리 되지 않는다.
const s3 = Symbol('foo');
console.log(Symbol.keyFor(s3)); //undefined

