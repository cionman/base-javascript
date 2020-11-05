//004 요소 추가
// Set 객체에 요소를 추가할 때는 Set.prototype.add 메서드를 사용한다.

const set = new Set();
console.log(set); //Set {}

set.add(1);
console.log(set); // Set { 1 }

// add 메서드는 추가된 Set객체를 반환하므로 호출한 후 add메서드를 연속적으로 호출 할 수 있다.
set.add(2).add(3);

console.log(set); //Set { 1, 2, 3 }

// Set 객체에 중복된 요소 추가는 허용되지 않는다. 에러나지 않고 무시된다.

set.add(2).add(2);
console.log(set); // Set { 1, 2, 3 }

// 일치 비교 연산자 === 을 사용하면 NaN과 NaN은 다르다고 평가하지만 Set 객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
const set1 = new Set();

console.log(NaN === NaN); // false
console.log(0 === -0); // true

set1.add(NaN).add(NaN);
console.log(set1); //Set { NaN }

//0 과 -0 도 같다고 판단하여 중복 추가를 허용하지 않는다.
set1.add(0).add(-0);
console.log(set1); // Set { NaN, 0 }

//Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다.
const set2 = new Set();
set2
    .add(1)
    .add('a')
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(() => {
    });

console.log(set2); // Set { 1, 'a', true, undefined, null, {}, [], [Function] }
