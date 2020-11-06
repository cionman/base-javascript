//014 Map 요소 존재여부 확인

// Map객체에 특정 요소가 존재하는지 확인하려면 Map.prototype.has메서드를 사용한다. 불리언 값을 반환한다.

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

console.log(map.has(lee)); // true
console.log(map.has('key')); // false