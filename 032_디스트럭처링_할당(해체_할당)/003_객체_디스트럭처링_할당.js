// 003 객체 디스트럭처링 할당

// ES5에서 객체의 각 프로퍼티를 객체로 부터 디스트럭처링 하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야한다.
var user1 = { firstName1: 'Tom', lastName1: 'Cruise' };
var firstName1 = user1.firstName1;
var lastName1 = user1.lastName1;
console.log(firstName1, lastName1); // Tom Cruise

/*
    - ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다.
    - 이때 객체 디스트럭처링 할당의 대상은 객체이어야하며, 할당기준은 프로퍼티 키다.
    - 순서는 의미가 없으며 선언도니 변수이름과 프로퍼티 키가 일치하면 할당된다.
 */

const user = { firstName: 'Tony', lastName: 'Stark' };

// 변수이름과 프로퍼티 키가 일치하면 할당, 순서는 의미 없다.
// 변수를 객체 리터럴 형태로 할당해야한다.
const { lastName, firstName } = user;
console.log(firstName, lastName); // Tony Stark

// 우변에 객체 또는 객체로 평가될 수 있는 표현식을 할당하지 않으면 에러가 발생한다.
//const {lastName2, firstName2}; //SyntaxError
//const {lastName2, firstName2} = null; //TypeError

/*
    - 위 예제에서 객체 리터럴 형태로 선언한 변수는 lastName, firstName다.
    - 이는 프로퍼티 축약표현을 통해 선언 한것이다.

    const { lastName, firstName } = user;
    // 위와 아래는 동치다.
    const { lastName: lastName, firstName: firstName } = user;
 */

// 객체의 프로퍼티 키와 다른 변수 이름으로 프로퍼티 값을 할당 받으려면 다음과 같이 변수를 선언한다.
const { lastName: ln, firstName: fn } = user;
console.log(fn, ln); // Tony Stark

// 객체의 디스트럭처링 할당을 이한 변수에 기본 값을 설정할 수 있다.
const { a = 'George', b } = { b: 'Lee' };
console.log(a, b); // George Lee

const { firstName: ff = 'Sam', lastName: ll } = { lastName: 'Jeremy' };
console.log(ff, ll); // Sam Jeremy

// 객체 디스트럭처링 할당은 객체에서 프로퍼티 키로 필요한 프로퍼티 값만 추출하여 변수에 할당하고 싶을 때 유용하다.
const str = 'Hello';
const { length } = str;
console.log(length); //5

const todo = { pk: 1, content: 'HTML', completed: true };

// todo 객체로 부터 pk값만 추출한다.
const { pk } = todo;
console.log(pk); //1

// 객체 디스트럭처링할당은 객체를 인수로 전달 받는 함수의 매개변수에도 사용할 수 있다.
function printTodo({ content, completed }) {
    console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo({ id: 1, content: 'HTML', completed: true }); // 할일 HTML은 완료 상태입니다.

// 배열의 요소가 객체인 경우 배열 디스트럭처링과 객체 디스트럭처링 할당을 혼용할 수 있다.
const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
];
const [, { id }] = todos;
console.log(id); //2

// 중첩 객체의 경우
const member = {
    name: 'Lee',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};
const { address: { city } } = member;
console.log(city); //Seoul

// Rest 프로퍼티 ... 을 사용할 수 있다. Rest파라미터나 Rest요소 와 마찬가지로 반드시 마지막에 위치해야한다.
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest); // 1 { y: 2, z: 3 }

