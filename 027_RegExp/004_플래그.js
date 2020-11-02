// 004 플래그
/*
    - 패턴과 함께 정규 표현식을 구성하는 플래그는 정규표현식의 검색 방식을 설정하기 위해 사용

    - i : ignore case, 대소문자를 구별하지 않고 검색
    - g : global, 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 검색
    - m : multiline, 문자열의 행이 바뀌더라도 패턴 검색을 계속
    - y : sticky, 대상 문자열의 현재 위치부터 비교를 시작하도록 설정함. sticky모드를 활성화
    - s : .에 개행 문자도 매칭(ES2018)
    - u : 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다.
 */

const target = 'Is this all there is?';

// target 문자열에서 is 문자열을 대소문자를 구별하여 한번만 검색
console.log(target.match(/is/)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한번만 검색
console.log(target.match(/is/i)); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

//target 문자열에서 문자열을 대소문자 구별하여 전역 검색
console.log(target.match(/is/g)); // [ 'is', 'is' ]

//target 문자열에서 is문자열을 대소문자를 구별하지 않고 전역 검색
console.log(target.match(/is/ig)); // [ 'Is', 'is', 'is' ]
