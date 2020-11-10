//004 __filename __dirname
/*
    - 노드에서는 파일 사이에 모듈 관계가 있는 경우가 많으므로 때로는 현재 파일의 경로나 파일명을 알아야함
    - 노드는 __filename, __dirname이라는 키워드로 경로에 대한 정보를 제공
    - __filename : 현재 파일명
    - __dirname : 현재 파일 경로

    - 운영체제에따라(맥, 윈도우, 리눅스 등) 폴더 경로가 / 또는 \ 으로 다르게 표시 될수 있음,
    - 경로 구분자를 해결해주는 모듈이 path 모듈
 */
console.log(__filename); // /Users/mac/Documents/02.Base/04. Javascript/base-javascript/047_노드_내장_객체/004___filename____dirname.js
console.log(__dirname);  // /Users/mac/Documents/02.Base/04. Javascript/base-javascript/047_노드_내장_객체
