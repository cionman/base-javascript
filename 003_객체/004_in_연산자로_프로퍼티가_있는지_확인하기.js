/*
- in 연산자를 사용하면 객체에 특정 프로퍼티가 있는지 확인할 수 있습니다.
 */

var card = { suit: "하트", rank: "A" };
console.log("suit" in card); //true
console.log("color" in card);  // false

/*
 모든 객체는 Object객체를 상속받기 대문에 toString이 존재함
 */

console.log("toString" in card);
