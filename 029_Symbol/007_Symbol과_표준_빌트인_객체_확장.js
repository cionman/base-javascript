// 007 심벌과 표준 빌트인 객체 확장
/*
    - 일반적으로 표준 빌트인 객체에 사용자 정의 메서드를 직접 추가하여확정하는 것은 권장하지 않는다.
    - 이유는 개발자가 직접 추가한 메스드와 미래에 표준 사양으로 추가될 메서드의 이름이 중복될 수 있기 때문이다.
 */

// 표준 빌트인 객체를 확장하는 것은 권장하지 않는다.
Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

[1, 2].sum(); // -> 3

// 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전하다.
Array.prototype[Symbol.for('sum')] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

[1, 2][Symbol.for('sum')](); // -> 3

