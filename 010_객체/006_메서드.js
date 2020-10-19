/*
프로퍼티에 저장된 값의 타입이 함수면 그 프로퍼티는 메서드라고 부름
 */

var circle = {
    center: { x: 1.0, y: 2.0 },
    radius: 2.5,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());

circle.translate = function (a, b) {
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};
circle.translate(30, 50);
console.log(circle.center);
