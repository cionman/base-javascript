/*
- Symbol은 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값
- es 6에서 추가
 */

var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1)
console.log(sym2)
console.log(sym1 == sym2) //false

var HEART = Symbol("하트")
console.log(HEART.toString())


/*
 심볼 활용의 예

 바둑 게임을 만든다고 했을때
 */

var NONE = 0; //칸에 돌이 놓여있지 않은 상태
var BLACK = -1; //칸에 돌이 놓여 있는 상태
var WHITE = 1;  //칸에 흰 돌이 놓여 있는 상태

/**
 위 코드에서 숫자는 의미를 가지지 않음, 칸의 상태를 cell 변수에 저장한다고 가정했을 때 cell 값을 확인하려면 cell == white라고
 작성해야 프로그램이 읽기 쉬워질 것임, 심볼을 활용하면 아래와 같이 수정가능
 */

var NONE = Symbol("none")
var BLACK = Symbol("black")
var WHITE = Symbol("white")
