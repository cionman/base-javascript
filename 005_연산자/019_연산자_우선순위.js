// 019 연산자 우선순위
/*

1.  ()
2.  new(매개변수존재, [](프로퍼티접근), ()(함수호출), ?.(옵셔널 체이닝)
3.  new(매개변 미존재)
4.  x++, x--
5   !x, +x, -x, ++x, --x, typeof, delete
6.  **(이항 연산자 중에서 우선순위가 가장 높다)
7.  *, /, %
8.  +, -
9.  <, <=, >, >=, instanceof
10  ==, !=, ===, !==
11  ??(null 병합연산자)
12  &&
13  ||
14  ? .. : .. (삼항연산)
15  할당연산자(=, +=, -= 등)
16  ,

-  연산자는 종류가 많아서 연산자 우선순위를 모두 기억하기 어렵고 실수하기도 쉽다. 따라서 그룹연산자를 사용하여 명시적으로 조절하는 것을 권장
 */

