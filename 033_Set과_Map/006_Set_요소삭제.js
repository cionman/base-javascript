//006 요소 삭제
// Set.prototype.delete 메서드를 사용한다.

const set = new Set([3, 4, 5]);

//요소 5를 삭제
set.delete(5);
console.log(set); // Set { 3, 4 }

//존재하지 않는 요소 삭제는 에러 없이 무시된다.
set.delete(0);
console.log(set); //Set { 3, 4 }

// delete 메서드는 삭제 성공여부를 나타내는 불리언 값을 반환한다. 연속적으로 호출할 수 없다.

console.log(set.delete(0)); //false
//set.delete(0).delete(0); // TypeError: set.delete(...).delete is not a function

// 일괄 요소 삭제
//Set.prototype.clear 메서드를 사용한다. undefined를 반환한다.
set.clear();
console.log(set); // Set {}