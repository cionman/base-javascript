//011 요소 개수 확인
/*
    - Map 객체의 요소 개수를 확인할 때는 Map.prototype.size 프로퍼티를 사용한다.
 */

const { size } = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size); //2

// size  프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티다. 따라서 size프로퍼티에 숫자를 할당하여 Map객체의 요소 개수를 변경할 수 없다.
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));

map.size = 10; //무시된다.
console.log(map.size); //2
