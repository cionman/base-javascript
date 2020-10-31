// 010 객체 변경 방지 Object.freeze 메서드
/*
    - 동결된 객체는 읽기만 가능하다.
    - Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다. 얕은 객체 동결
 */
const person = { name: 'Lee' };

console.log(Object.isFrozen(person)); //false

Object.freeze(person);

console.log(Object.isFrozen(person)); //true
console.log(Object.getOwnPropertyDescriptors(person)); //writable: false, configurable: false

// - Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다. 얕은 객체 동결
const person2 = {
    name: 'Lee',
    address: { city: 'Seoul' }
};

Object.freeze(person2);

console.log(Object.isFrozen(person2)); //true
console.log(Object.isFrozen(person2.address)); //false


/*
    - 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해
    재귀적으로 Object.freeze메서드를 호출해야한다.
 */

function deepFreeze(target) {

    if (target && typeof target === 'object') {
        Object.freeze(target);

        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

deepFreeze(person2);
console.log(Object.isFrozen(person2.address)); //true
