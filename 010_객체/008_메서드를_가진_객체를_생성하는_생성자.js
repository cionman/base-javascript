function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
}

var p = { x: 0, y: 0 };
var c = new Circle(p, 2.0);
console.log("넓이 = " + c.area());
