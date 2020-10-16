// 042 Array.prototype.find

/*
  - ES6에서 도입된 find메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백함수를 호출하여 반환 값이 true인 첫번째 요소를 반환한다.
  - 콜백함수의 반환값이 true인 요소가 존재하지 않으면 undefined를 반환한다.

  콜백함수 인자는 forEach, map과 마찬가지로 요소값, 인자, this를 순차적으로 반환한다.
 */

[1, 2, 3].find((item, index, arr) => {
    console.log(`요소값 : ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return false;
});

const users = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Choi" },
    { id: 4, name: "Park" },
];

const result = users.find(user => user.id === 2);
console.log(result); // { id: 2, name: 'Kim' }

// filter는 조건에 해당하는 모든 결과의 배열을 반환하고, find는 조건에 해당하는 첫번째 요소를 반환한다.
