//006 require 순환 참조
const dep1 = require('./module/dep1');
const dep2 = require('./module/dep2');

dep1();
dep2();

/*
    - dep1은 빈객체로 표시됨
    - 순환 참조가 있을 경우 순환참조되는 대상을 빈 객체로 만듬
    - 이 때 에러가 발생하지 않고 조용히 빈 객체로 변경되므로 예기치 못한 동작이 발생할 수 있음
 */