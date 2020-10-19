// 027 Array.prototype.fill
// 원본 변경

const arr = [1, 2, 3];
arr.fill(0);
console.log(arr);  //[ 0, 0, 0 ]


const arr2 = [1, 2, 3];

//인수로 전달받은 0을 배열의 인덱스 1부터 끝가지 채운다.
arr2.fill(0, 1);
console.log(arr2); // [ 1, 0, 0]

// 세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
const arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 1, 3);
console.log(arr3); // [ 1, 0, 0, 4, 5 ]


// fill 메서드는 요소를 하나의 값만으로 채울 수 밖에 없다. 하지만 Array.from을 이용하면 두번째 인수로 전달할 콜백함수를 통해 요소 값을 만들면서 배열을 채울 수 있다.

const sequence = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequence(5)); //[ 0, 1, 2, 3, 4 ]