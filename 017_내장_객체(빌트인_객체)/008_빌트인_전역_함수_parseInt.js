// 007 parseInt
/*
    - 전달받은 문자열 인수를 정수로 해석하여 반환한다.
 */

console.log(parseInt('3.14')); // 3
console.log(parseInt('10')); // 10

//공백으로 구분된 문자열은 첫번째 문자열만 변환
console.log(parseInt('34 45 65')); // 34
console.log(parseInt('40 years')); // 40

// 첫번째 문자열을 숫자로 변환할수 없으면 NaN
console.log(parseInt('He was 40')); // NaN

//앞뒤 공백은 무시된다.
console.log(parseInt(' 60 ')); //60¡


console.log(parseInt(10));  // 10
console.log(parseInt(10.123));  //10


// 10진수로 해석하고 그 결과를 10진수로 반환
console.log(parseInt('10'));  //10

// 2진수로 해석하고 그 결과를 10진수로 반환
console.log(parseInt('10', 2));  //2


// 8진수로 해석하고 그 결과를 10진수로 반환
console.log(parseInt('10', 8));  //8

// 16진수로 해석하고 그 결과를 10진수로 반환
console.log(parseInt('10', 16));  //16


const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(x.toString(2)); // -> '1111'
// 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log(parseInt(x.toString(2), 2)); // -> 15

// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(x.toString(8)); // -> '17'
// 문자열 '17'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log(parseInt(x.toString(8), 8)); // -> 15

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
console.log(x.toString(16)); // -> 'f'
// 문자열 'f'를 16진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log(parseInt(x.toString(8), 8)); // -> 15

// 숫자값을 문자열로 변환한다.
console.log(x.toString()); // -> '15'
// 문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 반환한다
console.log(parseInt(x.toString())); // -> 15


// 16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다.
console.log(parseInt('0xf')); // -> 15
// 위 코드와 같다.
console.log(parseInt('f', 16)); // -> 15

// 2진수 리터럴(0b로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
console.log(parseInt('0b10')); // -> 0
// 8진수 리터럴(ES6에서 도입. 0o로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
console.log(parseInt('0o10')); // -> 0

// 문자열 '10'을 2진수로 해석한다.
parseInt('10', 2); // -> 2
// 문자열 '10'을 8진수로 해석한다.
parseInt('10', 8); // -> 8

// 'A'는 10진수로 해석할 수 없다.
parseInt('A0'); // -> NaN
// '2'는 2진수로 해석할 수 없다.
parseInt('20', 2); // -> NaN

// 10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
parseInt('1A0'); // -> 1
// 2진수로 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
parseInt('102', 2); // -> 2
// 8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
parseInt('58', 8); // -> 5
// 16진수로 해석할 수 없는 'G' 이후의 문자는 모두 무시된다.
parseInt('FG', 16); // -> 15

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseInt('34 45 66'); // -> 34
parseInt('40 years'); // -> 40
// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseInt('He was 40'); // -> NaN
// 앞뒤 공백은 무시된다.
parseInt(' 60 '); // -> 60




