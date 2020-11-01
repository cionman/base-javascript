//004 Number 프로토 타입 메서드

/*
    1. Number.prototype.toExponential
    - 숫자를 지수 표기법으로 변환하여 문자열로 반환한다.
 */

console.log((77.3567).toExponential());  //7.73567e+1
console.log((77.3567).toExponential(4));  //7.7357e+1
console.log((77.3567).toExponential(2));  //7.74e+1
console.log((77).toExponential());
//console.log(77.toExponential()); //SyntaxError

//정수가 아닌 소수의 경우 괄호 없이 사용이 가능하지만 괄호(그룹연산자) 붙여 사용할 것을 권장한다.
console.log(77.3567.toExponential(2));  //7.74e+1

/*
    2. Number.prototype.toFixed
    - toFixed메서드는 숫자를 반올림하여 문자열로 반환한다.
    - 반올림하는 소수점 이하 자릿수를 나타내는 0 ~ 20 사이의 정수 값을 인수로 전달 할 수 있다.
 */

console.log((12345.6789).toFixed()); // 12346
console.log((12345.6789).toFixed(1)); // 12345.7
console.log((12345.6789).toFixed(2)); // 12345.68
console.log((12345.6789).toFixed(3)); // 12345.679

/*
    3. Number.prototype.toPrecision
    - toPrecision메서드는 인수로 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.
    - 인수로 전달받은 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.
    - 전체 자릿수를 나타내는 0 ~ 21사이의 정수 값을 인수로 전달한다. 생략하면 기본 0
 */

console.log((12345.6789).toPrecision()); // 12345.6789
console.log((12345.6789).toPrecision(1)); // 1e+4
console.log((12345.6789).toPrecision(2)); // 1.2e+4
console.log((12345.6789).toPrecision(6)); // 12345.7


/*
    4. Number.prototype.toString
    - 숫자를 문자열로 반환한다.
    - 진법을 나타내는 2 ~ 36 사이의 정수 값을 인수로 전달할 수 있다. 생략하면 10진법이 적용된다.
 */

console.log((10).toString()); // 10
console.log((16).toString(2)); // 10000
console.log((16).toString(8)); // 20
console.log((16).toString(16)); // 10