// 011 오버라이딩과 프로퍼티 섀도잉

const Person = (function () {

    //생성자 함수
    function Person(name) {
        this.name = name;
    }

    //프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`Hi My name is ${this.name}`);
    };

    //생성자 함수 반환
    return Person;
}());

const me = new Person('Lee');
me.sayHello = function () {
    console.log(`안녕 내이름은 ${this.name}다`);
};


me.sayHello(); //안녕 내이름은 Lee다

/*
    - 프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라
    프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가된다.

    - 이때 인스턴스 메서드 sayHello는 프로토타입 메서드 sayHello를 오버라이딩 했고,
    프로토타입 메서드 sayHello는 가려진다.
    - 이때 상속관계에 의해 오버라이딩되면서 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉이라한다.
 */

//프로퍼티를 삭제 하는 경우도 마찬가지다. 위예제에서 추가한 인스턴스 메서드 sayHello를 삭제해보자

delete me.sayHello;
me.sayHello(); // Hi My name is Lee

// 다시한번 sayHello메서드를 삭제하여 프로토타입 메서드의 삭제를 시도해보자
delete me.sayHello;
me.sayHello(); //Hi My name is Lee

/*
    - 이와 같이 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다.
    - 다시 말해 하위 객체를 통해 프로토타입의 get 엑세스는 허용되나 set 엑세스는 허용되지 않는다.
    - 프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 통해 프로토타입 체인으로 접근 하는 것이 아니라
    프로토타입에 직접 접근 해야한다.
 */

delete Person.prototype.sayHello;
//me.sayHello(); // TypeError: me.sayHello is not a function