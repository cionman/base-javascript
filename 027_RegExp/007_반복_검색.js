// 007 반복 검색

/*
    - {m,n}은 앞선 패턴(다음 예제의 경우 A)이 최소 m번, 최대 n번 반복되는 문자열을 의미한다.
    - 콤마뒤에 공백이 있으면 안된다.정상동작하지 않는다.
 */

const target = 'A AA B BB Aa Bb AAA';

// 'A'과 최소 2번, 최대3번 반복되는 문자열을 전역 검색
const regExp = /A{2,3}/g;
console.log(target.match(regExp)); //[ 'AA', 'AAA' ]

// {n}은 앞선 패턴이 n번 반복되는 문자열을 의미한다. 즉 {n} 은 {n,n}과 같다.
const regExp2 = /A{2}/g;
console.log(target.match(regExp2)); // [ 'AA', 'AA' ]

// {n,}앞선 패턴이 최소 n번이상 반복되는 문자열을 의미
const regExp3 = /A{2,}/g;
console.log(target.match(regExp3)); // [ 'AA', 'AAA' ]

// +는 앞선 패턴이 최소 한번 이상 반복되는 열을 의미, {1,}과 같다.

const regExp4 = /A+/g;
console.log(target.match(regExp4)); // [ 'A', 'AA', 'A', 'AAA' ]

// ?는 앞선 패턴이 최대 한번(0번포함) 이상 반복되는 문자열을 의미한다. {0,1}과 같다.

const target2 = 'color colour';
// 'colo' 다음 'u'가 최대 한번(0번포함)이상 반복되고 'r'이 이어지는 문자열
const regExp5 = /colou?r/g;
console.log(target2.match(regExp5)); //[ 'color', 'colour' ]



