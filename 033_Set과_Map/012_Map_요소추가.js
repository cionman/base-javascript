//012 Map 요소 추가

// Map 객체에 요소를 추가할때는 Map.prototype.set 메서드를 사용한다.

const map = new Map();
console.log(map); // Map {}

map.set('key1', 'value1');
console.log(map); // Map { 'key1' => 'value1' }

//set 메서드는 새로운 요소가 추가된 Map객체를 반환한다. 따라서 set메서드를 호출한 후에 set 메서드를 연속적으로 호출할 수 있다.

map
    .set('key2', 'value2')
    .set('key3', 'value3');

console.log(map); // Map { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

//Map 객체에 중복된 키를 갖는 요소는 덮어쓰게 된다.

map.set('key3', '두번째 같은키 추가');
console.log(map); // Map { 'key1' => 'value1', 'key2' => 'value2', 'key3' => '두번째 같은키 추가' }

/*
    - Map객체와 일반 객체의 가장 큰 차이는 모든 값을 키로 사용할수 있습니다.
    - 객체 또한 키로 사용할 수 있습니다.
 */

const map2 = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

//객체도 키로 사용할수 있다.
map2
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map2); // Map { { name: 'Lee' } => 'developer', { name: 'Kim' } => 'designer' }

