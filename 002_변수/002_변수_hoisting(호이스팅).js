/**
 *  프로그램은 작성한 순서에 따라 윗줄 부터 차례대로 실행되지만, 변수 선언은 이 원칙을 따르지 않음
 *
 *  프로그램 중간에 변수를 선언하더라도 변수가 프로그램 첫머리에 선언도니 것처럼 다른 문장 앞에 생성됨, 이를 변수 hoisting 이라고함
 *
 *  첫머리로 끌어올려진다.
 */

console.log(x)
var x;


/**
 *  선언과 동시에 대입하는 코드는 끌어올리지 않는다.
 */
console.log(y) // undefined 출력
var y = 5;
console.log(y)
