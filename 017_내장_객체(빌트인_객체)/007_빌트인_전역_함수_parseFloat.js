// 007 parseFloat
/*
    - 전달받은 문자열 인수를 부동 소수점 숫자, 즉 실수로 해석하여 반환한다.
 */

console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('10')); // 10

//공백으로 구분된 문자열은 첫번째 문자열만 변환
console.log(parseFloat('34 45 65')); // 34
console.log(parseFloat('40 years')); // 40

// 첫번째 문자열을 숫자로 변환할수 없으면 NaN
console.log(parseFloat('He was 40')); // NaN

//앞뒤 공백은 무시된다.
console.log(parseFloat(' 60 ')); //60¡

