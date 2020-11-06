//013 Map 요소 취득
/*
    - Map 객체에서 특정 요소를 취득하려면 Map.prototype.get 메서드를 사용한다.
    - get메서드의 인수로 키를 전달하면 해당 키를 갖는 값을 반환한다.
    - Map객체에서 인수로 전달한 키를 갖는 요소가 존재하지 않으면 undefined를 반환한다.
 */

const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map.get(lee)); // developer
console.log(map.get('key')); // undefined