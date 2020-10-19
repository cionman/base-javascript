// 023 Array.prototype.splice
// 원본 변경

/*
  - push pop unshift shift 는 모두 원본 배열을 직접 변경하는 메서드이면서, 처음이나 마지막 요소를 추가하거나 제거한다.
  - splice는 원본 배열의 중간 요소에 추가하거나 중간에 있는 요소를 제거하는 경우 사용한다.

  Array.prototype.splice(start, deleteCount, ...items)

  start :
    - 원본 배열의 요소를 제거하기 시작할 인덱스다.
    - start만 지정하면 원본배열의 start부터 모든 요소를 제거한다.
    - start가 음수면 배열의 끝에서의 인덱스를 나타낸다.
    - 만약 start가 -1이면 마지막 요소를 가리키고 -n이면 마지막에서 n번째요소를 가리킨다.

  deleteCount :
    - 원본 배열의 요소를 제거하기 시작할 인덱스인 start 부터 제거할 요소의 개수다.
    - deleteCount가 0인 경우는 아무런 요소도 제거되지 않는다.

  items: 제거한 위치에 삽입할 요소들의 목록이다. 생략할 경우 원본 배열에서 요소들을 제거하기만 한다.
 */


const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30);
// 제거한 요소가 배열로 반환된다.
console.log(result); // [ 2, 3 ]
console.log(arr); // [ 1, 20, 30, 4 ]

////////////

const arr2 = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 0개의 요소를 제거하고, 인덱스 1자리에 100을 삽입한다.
const result2 = arr2.splice(1, 0, 100);

//원본 배열이 변경된다.
console.log(arr2); //[1, 100, 2, 3, 4]

console.log(result2);

////////

const arr3 = [1, 2, 3, 4];
const result3 = arr3.splice(1);
console.log(arr3);  // [ 1]
console.log(result3); // [2, 3, 4]

////////
/*
 배열에서 특정 요소를 제거하려면 indexOf 메서드를 통해 인덱스를 취득하고 splice로 삭제한다.
 */

const arr4 = [1, 2, 3, 1, 2];

// 배열 array에서 item 요소를 제거한다. item 요소가 여러개 존재하면 첫 번째 요소만 제거.
function remove(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
    return array;
}

console.log(remove(arr4, 2)); // [ 1, 3, 1, 2]