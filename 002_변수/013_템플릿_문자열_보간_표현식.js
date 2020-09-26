/*
- 템플릿 문자열 안에는 플레이스 홀더를 넣을 수 있음
 */

var a = 2, b = 3;
console.log(`${a} + ${b} = ${a + b};`); // 2 + 3 = 5

var now = new Date()
console.log(`오늘은 ${now.getMonth() + 1} 월 ${now.getDate()}일 입니다.`)
