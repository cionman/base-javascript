//010 Map 객체의 생성
/*
    - Map 객체는 Map 생성자 함수로 생성한다. Map 생성자 함수에 인수를 전달하지 않으면 빈 Map객체가 생성된다.
 */

const map = new Map();
console.log(map); // Map {}

/*
    - Map 생성자 함수는 이터러블을 인수로 전달 받아 Map객체를 생성한다.
    - 이 때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야한다.
 */

const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1); // Map { 'key1' => 'value1', 'key2' => 'value2' }

// const map2 = new Map([1, 2]); // TypeError: Iterator value 1 is not an entry object

// 중복된 키는 마지막에 저장된 값만 남는다.(덮어쓴다.)

const map3 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map3); // Map { 'key1' => 'value2' }
