// 005 메서드

/*
    - 프로퍼티 값이 함수일 경우 메서드라 부른다.
    - 메서드 내부에서 사용한 this는 circle객체를 참조한다.
 */

var circle = {
    radius: 5,
    getDiameter: function () {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter()); //10