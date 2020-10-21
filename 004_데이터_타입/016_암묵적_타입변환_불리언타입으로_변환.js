// 016 암묵적 타입변환 - 불리언 타입으로 변환

/*
    - 자바스크립트 엔진은 제어문의 조건식의 평가 결과를 불리언 타입으로 암묵적으로 타입변환한다.
 */
/*
    falsy 로 평가되는 값

    - false
    - undefined
    - null
    - 0, -0
    - NaN
    - ''
 */

if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');
if (undefined) console.log('6');
if ([]) console.log('7');
if ({}) console.log('8');

// 2 4 7 8
