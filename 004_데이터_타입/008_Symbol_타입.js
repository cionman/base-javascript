// 008 Symbol 타입

/*
 - ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값
 - 심벌 값은 다른 값과 중복되지 않는 유일무이한 값
 - 주로 이름이 충돌할 위헙이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용
 - 심벌 이외의 원시 값은 리터럴통해 생성하지만 Symbol은 Symbol함수를 호출해 생성
 - 이 때 생성된 Symbol 값은 외부에 노출되지 않으며, 다른 값과도 절대 중복되지 않는 유일무이한 값
 */

var key = Symbol('key');
console.log(typeof key);
console.log(key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);