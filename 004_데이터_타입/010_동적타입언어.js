// 010 동적 타입 언어
/*

- 선언이 아닌 할당에 의해 타입이 결정(타입추론)됨
- 재할당에 의해 변수의 타입은 언제든지 동적으로 변경
- 위와 같은 특징을 동적타이핑이라함
- 동적 타입언어 : 파이썬, php, ruby 등

 */

var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 'hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);
