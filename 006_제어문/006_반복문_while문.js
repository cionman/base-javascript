// 006 반복문 - while문
/*
  - while문은 주어진 조건식의 평가 결과가 참이면 코드 블럭을 계속해서 반복 실행한다.
  - for문은 반복횟수가 명확할 때 주로 사용하고, while문은 반복횟수가 불명확할 때 주로 사용한다.
  - while문은 조건문의 평가 결과가 거짓이 되면 코드 블럭을 실행하지 않고 종료한다.
  - 만약 조건식의 평가 결과가 불리언 값이 아니면, 불리언 값으로 강제 변환하여, 논리적인 참 거짓을 구별한다.
 */

var count = 0;
while (count < 3) {
    console.log(count);
    count++;
} // 0 1 2

//while(true) {} //무한 루프

count = 0;
while (true) {
    console.log(count);
    count++;
    if (count === 3) break;
} // 0 1 2