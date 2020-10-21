// 012 메서드 축약 표현

//ES5
var obj = {
    name: 'Lee',
    sayHi: function () {
        console.log('Hi!, ' + this.name);
    }
};

//ES6
// 메서드를 정의할 때 function 키워드를 생략한 축약표현을 사용할 수 있다.

const obj2 = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};