// 009 encodeURI / decodeURI

/*
    - encodeURI 함수는 완전한 URI를 문자열로 전달 받아 이스케이프 처리를 위해 인코딩한다.
    - URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다.
    - 알파벳, 0~9 숫자, -_.!~*'() 문자 는 이스케이프처리에서 제외된다.
    - 쿼리스트링 구분자로 사용되는 =, ?, & 은 인코딩하지 않는다.
 */

const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher



