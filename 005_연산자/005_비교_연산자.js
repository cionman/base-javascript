// 005 비교 연산자

/*
 - 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.
 - if나 for문과 같은 제어문의 조건식에 주로 사용한다.
 */

/*
동등/일치 비교 연산자

- 동등비교(loose quality)와 일치비교(strict quality)연산자는 좌항과 우항의 피연산자가 같은 값으로 평가되는지 비교해 불리언 값을 반환

==  : 동등 비교 : x == y : x와 y의 값이 같음
=== : 일치 비교 : x === y : x와 y의 값과 타입이 같음
!= : 부동등 비교 : x != y : x와 y의 값이 다름
!== : 불일치 비교 : x !== y : x와 y의 값과 타입이 다름
 */


console.log(5 == 5); //true
console.log(5 == '5'); //true, 타입이 다르지만 암묵적 타입변환을 통해 true로 평가된다.

console.log('0' == ''); //false
console.log(0 == ''); //true
console.log(0 == '0'); //true
console.log(false == 'false'); //false
console.log(false == '0'); //true
console.log(false == null); //false
console.log(false == undefined); //false

/*
  - 이처럼 동등 비교 연산자는 예측하기 어려운 결과를 만들어 낸다. 따라서 동등 비교 연산자는 사용하지 않는 편이 좋다.
    대신에 일치비교 연산자를 사용한다.
 */

console.log(5 === 5); //true
console.log(5 === '5'); //false

//일치 비교 연산자에서 주의할 것은 NaN이다.
console.log(NaN === NaN); // false

//NaN인지 조사하기 위해서는 빌트인 함수 isNaN을 사용한다.
console.log(isNaN(NaN)); //true

//양의 0과 음의 0의 일치 동등 비교 모두 결과는 true
console.log(0 == -0); // true
console.log(0 === -0); //true

// 서로 다른 두 객체는 절대 일치하지도, 동등하지도 않습니다
class Book {
}

const a = new Book();
const b = new Book();
console.log(a == b); //false
console.log(a === b); //false

const c = b;
// 객체를 비교하는 표현식은 두 피연산자가 동일한 객체를 참조하는 경우에만 참입니다.
console.log(b == c); //true
console.log(b === c); //true


// 부동등 비교
console.log(5 != 8); //true
console.log(5 != 5); //false
console.log(5 != '5'); //false

// 불일치 비교
console.log(5 !== 8); //true
console.log(5 !== 5); //false
console.log(5 !== '5'); //true