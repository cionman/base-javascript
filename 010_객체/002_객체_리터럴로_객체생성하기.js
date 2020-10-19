//객체 리터럴
var card1 = { suit: "하트", rank: "A" };

console.log(card1.suit);
console.log(card1["rank"]);

//객체 리터럴 프로퍼티 이름을 문자열로 표현할 수 있다.
var card2 = { "suit": "클로버", "rank": "J" };
console.log(card2.suit);
console.log(card2["rank"]);


//객체에 없는 프로퍼티에 접근하려고 하면 undefined
console.log(card2.color); //undefined

//빈 객체 생성
var obj = {};
console.log(obj);

