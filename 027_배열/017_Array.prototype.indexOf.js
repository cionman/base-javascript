// 017 Array.prototype.indexOf

const arr = [1, 2, 2, 3];

// 배열 arr 요소 2를 검색하여 첫번째로 검색된 요소의 인덱스를 반환한다.
console.log(arr.indexOf(2));

// 4는 없으므로 -1을 반환한다.
console.log(arr.indexOf(4));

// 두 번째 인수는 검색을 시작할 인덱스다
console.log(arr.indexOf(2, 2));

// indexOf 메서드는 배열에 특정요소가 존재하는지 확인할 때 유용하다
const foods = ['apple', 'banana', 'orange'];
if (foods.indexOf('orange') === -1) { // 존재하지 않으면
    foods.push('new orange');
}
console.log(foods); // [ 'apple', 'banana', 'orange' ]

//indexOf 메서드 대신에 ES7에서 도입된 includes 메서드를 사용하면 가독성이 더 좋다.

if (!foods.includes('orange')) { // 존재하지 않으면
    foods.push('new orange');
}

console.log(foods);

// indexOf는  NaN이 포함되어 있는지 확인할 수 없다.
console.log([NaN].indexOf(NaN)); // -1