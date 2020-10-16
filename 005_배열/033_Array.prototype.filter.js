// 033 Array.prototype.filter
// 원본 유지

/*
 filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달 받은 콜백함수를 반복 호출한다.
 그리고 콜백함수의 반환값이 true인 요소만 구성된 새로운 배열을 반환한다.
 원본배열은 유지된다.
 */

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(item => item % 2);
console.log(odds);

[1, 2, 3].filter((item, index, arr) => {
    console.log(`요소값 : ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item % 2;
});

class Users {
    constructor() {
        this.users = [
            { id: 1, name: 'Lee' },
            { id: 2, name: 'Kim' }
        ];
    }

    findById(id) {
        return this.users.filter(user => user.id === id);
    }

    remove(id) {
        // id가 일치하지 않는 사용자를 제거한다.
        this.users = this.users.filter(user => user.id !== id);
    }
}

const users = new Users();

let user = users.findById(1);
console.log(user); //[ { id: 1, name: 'Lee' } ]
users.remove(1);

user = users.findById(1);
console.log(user); // []