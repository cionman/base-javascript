// 002 let

/*
    - var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let과 const를 도입
 */

/*
    1. 변수 중복 선언 금지
 */

var foo = 123;
var foo = 456;

let bar = 123;
//let bar = 456; //SyntaxError

/*
    2. 블록 레벨 스코프
    - var 키워드는 오로지 함수의 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프
    - let 키워드는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프
 */

let a = 1;
{
    let a = 2;
    let b = 3;
}

console.log(a); //1
//console.log(b); // referenceError

/*
    3. 변수 호이스팅이 동작하지 않는 것 처럼 동작한다.
        - var 키워드로 선언한 변수와 달리  let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
        - var 키워드로 선언한 변수는 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언단계와 초기화 단계가 한번에 진행된다.
        - var 키워드는 런타임이전에 선언과 동시에 undefined로 초기화 한다.
        - let 키워드로 선언한 변수는 선언단계와 초기화 단계가 분리되어 진행된다. 런타임 이전에 선언단계가 먼저 실행되지만,
        초기화 단계는 변수 선언문에 도달했을때 실행된다. 초기화 단계 이전에 접근하게 되면 ReferenceError가 발생한다.
        - 변수 호이스팅은 일어난다. 초기화가 뒤늦게 실행될 뿐이다.
 */

//console.log(d); //ReferenceError;
let d;


// let의 변수 호이스팅이 일어나는 것을 보여주는 예
let e = 1;
{
    //변수 e가 블럭 내 상단에서 호이스팅되어 선언 과정을 거친 후 초기화는 지연되어 RerenceError발생
    //console.log(e); // referenceError
    let e = 2;
}

/*
    - 자바스크립트는 ES6에서 도입된 let, const를 포함해서 모든 선언(var, let, const, function, class 등)을 호이스팅 한다.
    - 단 ES6에서 도입된 let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다. 선언을 먼저하고 코드 상에서 초기화하기때문이다.

 */

/*
    4. 전역 객체와 let
    - var로 선언한 전역변수와 전역함수는 암묵적으로 전역객체(브라우저에서는 window)의 프로퍼티가 된다. v
    - let 키워드로 선언한 전역 변수는 전역객체의 프로퍼티가 아니다.
 */
// 전역 변수



