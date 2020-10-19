// 011 배열생성 Array.from

/*
   ES6 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달 받아 배열로 변환하여 반환한다.
 */
console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); //[ 'a', 'b' ]
console.log(Array.from({ 0: 'a', 1: 'b' })); //[]
console.log(Array.from('hello')); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from({ length: 3 })); // [ undefined, undefined, undefined ]
console.log(Array.from({ length: 3 }, (_, i) => i + 3)); //[ 3, 4, 5 ]

/*
 유사 배열 객체란 마치 배열 처럼 인덱스로 프로퍼티 값에 접근 할 수 있고, length프로퍼티를 갖는 객체를 말한다.
 유새 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다.
 */
const arrayLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange',
    length: 3
};
for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]); //apple banana orange
}


// fill 메서드는 요소를 하나의 값만으로 채울 수 밖에 없다. 하지만 Array.from을 이용하면 두번째 인수로 전달할 콜백함수를 통해 요소 값을 만들면서 배열을 채울 수 있다.

const sequence = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequence(5)); //[ 0, 1, 2, 3, 4 ]