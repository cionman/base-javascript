// 043 Array.prototype.findIndex

/*
  - ES6에서 도입된 findIndex메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백함수를 호출하여 반환 값이 true인 첫번째 요소의 index를 반환한다.
  - 콜백함수의 반환값이 true인 요소가 존재하지 않으면 -1을 반환한다.

  콜백함수 인자는 forEach, map과 마찬가지로 요소값, 인자, this를 순차적으로 반환한다.
 */

[1, 2, 3].findIndex((item, index, arr) => {
    console.log(`요소값 : ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});

const users = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Choi" },
    { id: 4, name: "Park" },
];

const result = users.findIndex(user => user.id === 2);
console.log(result); // 1


function predicate(key, value) {
    // key와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
}

console.log(users.findIndex(predicate('id', 3))); // 2
console.log(users.findIndex(predicate('name', 'Park'))); // 3