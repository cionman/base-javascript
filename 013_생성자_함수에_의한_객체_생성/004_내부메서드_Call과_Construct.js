// 004 내부 메서드 Call과 Construct

/*
    - 함수 선언문 또는 함수 표현식으로 정의된 함수는 일반적인 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
    - 생성자 함수로서 호출한다는 것은 new 연산자와 함께 호출하여 객체를 생성하는 것을 의미한다.
    - 함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다.
    - 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문이다.
    - 함수 객체의 다른점은 일반 객체는 호출할 수 없지만 함수는 호출 할 수 있다.
    - 함수 객체만을 위한 [[Environment]], [[FormalParameters]]등의 내부 슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.
    - 내부 메서드 [[Call]]을 갖는 함수 객체를 callable이라 하먀, 내부메서드 [[Construct]]를 갖는 함수 객체를 constructor,
    [[Construct]]를 갖지 않는 함수 객체를 non-constructor라 부른다.
    - non-constructor는 객체를 생성자 함수로서 호출할 수 없는 함수를 의미한다.
*/

function foo() {
}

foo.prop = 10;

foo.method = function () {
    console.log(this.prop);
};

foo.method();

console.log(Object.getOwnPropertyDescriptors(foo));

// 일반적인 함수로서 호출 [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출 [[Construct]] 가 호출된다.
new foo();