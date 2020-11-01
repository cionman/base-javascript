//002 Math 메서드

/*
    1. Math.abs

    - 인수로 전달된 숫자의 절대값을 반환한다.
 */

console.log(Math.abs(-1)); //1
console.log(Math.abs('-1')); //1
console.log(Math.abs('')); //0
console.log(Math.abs([])); //0
console.log(Math.abs(null)); //0
console.log(Math.abs(undefined)); //NaN
console.log(Math.abs({})); //NaN
console.log(Math.abs('string')); //NaN
console.log(Math.abs()); //NaN

/*
    2. Math.round
    - 소수점 이하를 반올림한 정수를 반환한다.
 */

console.log(Math.round(1.4)); //1
console.log(Math.round(1.6)); //2
console.log(Math.round(-1.4)); //-1
console.log(Math.round(-1.6)); //-2
console.log(Math.round(1)); //1
console.log(Math.round('')); //0
console.log(Math.round([])); //0
console.log(Math.round(null)); //0
console.log(Math.round(undefined)); //NaN
console.log(Math.round({})); //NaN
console.log(Math.round('string')); //NaN
console.log(Math.round()); //NaN

/*
    3. Math.ceil
    - 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다.
 */

console.log(Math.ceil(1.4)); //2
console.log(Math.ceil(1.6)); //2
console.log(Math.ceil(-1.4)); //-1
console.log(Math.ceil(-1.6)); //-1
console.log(Math.ceil(1)); //1
console.log(Math.ceil('')); //0
console.log(Math.ceil([])); //0
console.log(Math.ceil(null)); //0
console.log(Math.ceil(undefined)); //NaN
console.log(Math.ceil({})); //NaN
console.log(Math.ceil('string')); //NaN
console.log(Math.ceil()); //NaN


/*
    4. Math.floor
    - 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다.
 */

console.log(Math.floor(1.4)); //1
console.log(Math.floor(1.6)); //1
console.log(Math.floor(-1.4)); //-2
console.log(Math.floor(-1.6)); //-2
console.log(Math.floor(1)); //1
console.log(Math.floor('')); //0
console.log(Math.floor([])); //0
console.log(Math.floor(null)); //0
console.log(Math.floor(undefined)); //NaN
console.log(Math.floor({})); //NaN
console.log(Math.floor('string')); //NaN
console.log(Math.floor()); //NaN

/*
    5. Math.sqrt
    - 인수로 전달된 숫자의 제곱근을 반환한다.
 */

console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(-9)); // NaN
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(1)); //1
console.log(Math.sqrt('')); //0
console.log(Math.sqrt([])); //0
console.log(Math.sqrt(null)); //0
console.log(Math.sqrt(undefined)); //NaN
console.log(Math.sqrt({})); //NaN
console.log(Math.sqrt('string')); //NaN
console.log(Math.sqrt()); //NaN

/*
    6. Math.random
    - 임의의 난수(랜덤 숫자)를 반환한다.
    - 반환하는 난수는 0에서 1미만의 실수다.
 */

const random = Math.floor(Math.random() * 10, +1);
console.log(random); // 1에서 10범위의 정수

/*
    7. Math.pow
    - 첫번째 인수를 밑으로, 두번 째 인수를 지수로 거듭제곱한 결과를 반환한다.
 */

console.log(Math.pow(2, 8)); //256
console.log(Math.pow(2)); //NaN

//ES7 지수 연산자
console.log(2 ** 8); //256

/*
    8. Math.max
    - 전달 받은 인수중 가장 큰 수를 반환한다.
    - 인수가 전달되지 않으면 -Infinity를 반환한다.
 */

console.log(Math.max(1)); //1
console.log(Math.max(1, 3, 5)); //5
console.log(Math.max()); //-Infinity

// 배열을 인수로 전달 받아 배열의 요소중에서 최대 값을 구하려면 Function.prototype.apply 메서드 또는 스프레드 문법을 사용해야한다.

console.log(Math.max.apply(null, [1, 2, 3])); //3
console.log(Math.max(...[1, 2, 3])); // 3


/*
    9. Math.min
    - 전달 받은 인수중 가장 작은 수를 반환한다.
    - 인수가 전달되지 않으면 Infinity를 반환한다.
 */

console.log(Math.min(1)); //1
console.log(Math.min(1, 3, 5)); //1
console.log(Math.min()); //Infinity

// 배열요소중 찾을 때
console.log(Math.min.apply(null, [1, 2, 3])); //1
console.log(Math.min(...[1, 2, 3])); // 1

