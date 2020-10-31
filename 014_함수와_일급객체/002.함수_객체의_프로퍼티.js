// 002 함수 객체의 프로퍼티

function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));

/*
    {
  length: { value: 1, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'square',
    writable: false,
    enumerable: false,
    configurable: true
  },
  arguments: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  caller: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  prototype: {
    value: square {},
    writable: true,
    enumerable: false,
    configurable: false
  }
}

 */

// __proto__는 square함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); //undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체부터 __proto__ 접근자 프로퍼티를 상속 받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));