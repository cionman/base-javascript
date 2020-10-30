// 003 const

/*
    - 상수를 선언하기 위해 사용하지만 반드시 상수만을 위해 사용하지는 않는다.
    - const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.
    - let과 마찬가지로 블록레벨 스코프를 가진다.
    - 호이스팅이 일어나지 않는 것처럼 보이는 부분은 let과 동일하다.
    - const키워드로 선언한 변수는 재할당이 금지된다.
    - const키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고
    const키워드에 의해 재할당이 금지되므로 할당된 값을 변경할수 있는 방법은 없다.
    - const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
    - 재할당을 금지할 뿐 불변을 의하지 않는다.

 */

//const foo; //SyntaxError

const person = {
    name: 'Lee'
};
person.name = 'KIM';
console.log(person);