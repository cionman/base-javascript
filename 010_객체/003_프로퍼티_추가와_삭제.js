//객체 리터럴
var card1 = { suit: "하트", rank: "A" };

console.log(card1.suit);
console.log(card1["rank"]);

//추가

card1.value = 14;
card1["count"] = 10;
console.log(card1);


//삭제
delete card1.rank;
console.log(card1);
