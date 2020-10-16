// 044 Array.prototype.flatMap

/*
   - ES2019에서 도입된 flatMap메서드는 map메서드를 통해 생성된 새로운 배열을 평탄화 한다.
   - 즉 map메서드와 flat메서드를 순차적으로 실행하는 효과가 있다.
   - 단 flatMap메서드는 flat 메서드 처럼 평탄화 깊이를 지정할 수 없고, 1단계만 평탄화한다.
 */

const arr = ['hello', 'world'];
console.log(arr.map(x => x.split(''))); //[ [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ] ]
console.log(arr.map(x => x.split('')).flat()); //[ 'h', 'e', 'l', 'l', 'o' ,  'w', 'o', 'r', 'l', 'd'  ]

console.log(arr.flatMap(x => x.split(''))); //[ 'h', 'e', 'l', 'l', 'o' ,  'w', 'o', 'r', 'l', 'd'  ]