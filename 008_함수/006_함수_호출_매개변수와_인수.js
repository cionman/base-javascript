// 006 함수 호출 - 매개변수와 인수

/*
    - 함수를 실행하기 위해 필요한 값을 함수외부에서 함수 내부로 전달할 필요가 있는 경우, 매개변수를 통해 인수를 전달한다.
    - 인수는 값으로 평가될 수 있는 표현식이어야 한다.
    - 인수는 함수를 호출할 때 지정하며 개수와 타입에 제한이 없다.
 */

//함수 선언문
function add(x, y) {
    console.log(`x : ${x}`);
    console.log(`y : ${y}`);
    console.log(`arguments : ${arguments}`);
    return x + y;
}

/*
    함수 호출
    인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
 */
var result = add(1, 2);
console.log(result);

//add 함수의 매개변수 x, y는 몸채 내부에서만 참조할 수 있다.
//console.log(x, y); //Reference: x is not defined;

/*
   - 함수는 매개변수의 개수와 인수의 갯수가 일치하는지 체크하지 않는다.
   - 함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만 그렇지 않은 경우에도 에러가 발생하지 않는다.
   - 인수가 부족해서 인수가 할당되지 않은 매개 변수의 값은 undefined다.
 */
console.log(add(2)); //y가 undefined 결과는 NaN

//매개 변수가 인수보다 더 많은 경우 초과된 인수는 무시된다.
//초과된 인수는 버려지는 것은 아니고 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
console.log(add(1, 2, 3)); // 3