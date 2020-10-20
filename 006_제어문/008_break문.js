// 008 break문

/*
    - switch문과 while문에서 살펴보았듯이, break문은 코드 블록을 탈출한다.
    - 좀더 정확히 표현하자만, 코드 블록을 탈출하는 것이 아니라 레이블 문, 반복문 또는 switch문의 코드 블럭을 탈출한다.
    -  레이블 문, 반복문 또는 switch문의 코드 블록 외에 break문을 사용하면 SyntaxError가 발생한다.
 */

/*
if(true){
    break; // SyntaxError
}
*/

// 레이블 문이란 식별자가 붙은 문을 말한다.

foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done !');

/*
    - 레이블 문은 중첩된 for문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.
    - 레이블문을 사용하면 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.
 */

outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done !');
