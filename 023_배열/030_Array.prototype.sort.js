// 030 Array.prototype.sort
// 원본 변경

const fruits = ['Banana', 'Orange', 'Apple'];
// 오름차순
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
fruits.reverse();
console.log(fruits); //[ 'Orange', 'Banana', 'Apple' ]

const fruits2 = ['바나나', '오렌지', '사과'];
//오름차순
fruits2.sort();
console.log(fruits2); // [ '바나나', '사과', '오렌지' ]

// 숫자로 이루어진 배열을 정렬할 때는 주의가 필요하다.
// 문자열 기준으로 정렬이 된다.
const points = [40, 100, 1, 5, 2, 25, 10];
points.sort();
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5]

/*
  숫자 정렬시에는 정렬 순서를 정의 하는 비교 함수를 인수로 전달해야한다.
 */

const points2 = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름 차순 정렬, 비교 함수의 반환 값이 0보다 작으면 a를 우선 하여 정렬한다.
points2.sort((a, b) => a - b);
console.log(points2);

console.log(points2[0], points2[points2.length - 1]);

// 숫자 배열의 내림차순 정렬
points2.sort((a, b) => b - a);
console.log(points2);

console.log(points2[0], points2[points2.length - 1]);

// 객체를 요소로 갖는 배열을 정렬하는 예제
const todos = [
    { id: 4, content: 'Javascript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
];

// 비교함수, 매개변수 key는 프로퍼티 키다.
function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);

todos.sort(compare('content'));
console.log(todos);