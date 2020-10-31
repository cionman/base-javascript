// 008 객체 변경 방지 Object.seal 메서드

/*
    - Object.seal 메서드는 객체를 밀봉한다.
    - 밀봉된 객체는 읽기와 쓰기만 가능하다.
    - Object.isSealed 메서드로 확인할 수 있다.
 */

const person = { name: 'Lee' };

//person 객체는 밀봉된 객체가 아니다.
console.log(Object.isSealed(person)); //false

//person 객체를 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);


//person 객체는 밀봉된 객체다.
console.log(Object.isSealed(person)); //true

//밀봉된 객체는 프로퍼티 어트리뷰트 configurable이 false 다.
console.log(Object.getOwnPropertyDescriptors(person));

//프로퍼티 추가가 금지된다.
person.age = 20; //무시, strict mode 에서는 에러 발생
console.log(person); // {name : 'Lee'}

//프로퍼티 삭제가 금지된다.
delete person.name; //무시, strict mode 에서는 에러 발생
console.log(person);  // {name : 'Lee'}

//프로퍼티 값 갱신은 가능하다.
person.name = 'Kim';
console.log(person);  // {name : 'Kim'}

//프로퍼티 어트리뷰트 재정의가 금지된다.
//Object.defineProperty(person, 'name', { configurable: true }); //TypeError: Cannot redefine property: name



