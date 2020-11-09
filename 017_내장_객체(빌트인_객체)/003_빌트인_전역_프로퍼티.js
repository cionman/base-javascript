// 003 빌트인 전역 프로퍼티
/*
    - 빌트인 전역 프로퍼티는 전역객체의 프로퍼티를 의미한다.
    - 주로 애플리케이션 전역에서 사용하는 값을 제공한다.

 */

/*
    1. Infinity
    - 무한대를 나타내는 숫자값
 */

console.log(global.Infinity === Infinity); // true
console.log(3 / 0);//Infinity
console.log(-3 / 0);//-Infinity
console.log(typeof Infinity);//number


/*
    2. NaN
    - Nan 프로퍼티는 숫자가 아님을 나타내는 숫자값
 */

console.log(global.NaN); //NaN
console.log(Number('xyz')); //NaN
console.log(Number(1 * 'String')); //NaN

/*
    3. undefined

 */
console.log(global.undefined);