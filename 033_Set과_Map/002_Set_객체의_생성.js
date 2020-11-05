//002 Set 객체의 생성
/*
    - Set 객체는 Set 생성자 함수로 생성한다.
    - Set 생성자 함수에 인수를 전달하지 않으면 빈 Set 객체가 생성된다.
 */
const set = new Set();
console.log(set); // Set {}

/*
    - Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성한다.
    - 이 때 이터러블의 중복된 값은 Set객체에 요소로 저장되지 않는다.

 */
const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set { 1, 2, 3 }

const set2 = new Set('hello');
console.log(set2); // Set { 'h', 'e', 'l', 'o' }

//중복 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const uniq1 = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq1([2, 1, 2, 3, 4, 3, 4, 5])); // [ 2, 1, 3, 4, 5 ]

const uniq2 = array => [...new Set(array)];
console.log(uniq2([2, 1, 2, 3, 4, 3, 4, 5])); // [2, 1, 3, 4, 5]


