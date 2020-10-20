// 009 continue 문

/*
    - continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행흐름을 이동 시킨다.
 */


// 특정 문자의 갯수를 세는 예다
var string = 'Hello World.';
var search = 'l';
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count++;
}
console.log(count); //3

//참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3