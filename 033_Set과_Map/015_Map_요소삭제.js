//015 Map 요소 삭제

// Map.prototype.delete 메서드를 사용한다. delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환한다.

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);
map.delete(kim);

console.log(map); // Map { { name: 'Lee' } => 'developer' }

// 만약 존재하지 않는 키로 Map객체의 요소를 삭제하려 하면 에러 없이 무시된다.
console.log(map.delete('choi')); //false 에러 나지 않는다.
console.log(map); // Map { { name: 'Lee' } => 'developer' }

//set 메서드와 달리 연속적으로 호출할 수 없다.
//map.delete(kim).delete(kim); //TypeError: map.delete(...).delete is not a function

//요소의 일괄 삭제는 Map.prototype.clear메서드를 사용한다. clear 메서드는 언제나 undefined를 반환한다.

const map2 = new Map([[1, '3'], [2, '5']]);
console.log(map2); // Map { 1 => '3', 2 => '5' }

map2.clear();
console.log(map2); // Map {}
