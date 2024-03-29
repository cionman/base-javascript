//007 객체 변경 방지

/*
    - 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다.

    Object.preventionExtensions
    - 객체 확장 금지
    - 프로퍼티 추가가 금지된다.
    - 프로퍼티 삭제, 값읽기, 값쓰기, 프로퍼티 재정의는 허용된다.

    Object.seal
    - 객체 밀봉
    - 프로퍼티 추가, 프로퍼티 삭제, 프로퍼티 재정의가 금지된다.
    - 프로퍼티 값읽기, 값쓰기 허용된다.

    Object.freeze

    - 객체 동결
    - 프로퍼티 추가, 삭제, 값쓰기, 재정의가 금지된다.
    - 프로퍼티 읽기만 허용된다.
 */