// 045 Array.prototype 기타

const arr = [1, 3, 5, 7];

// entries() 배열의 요소의 인덱스와 값이 요소로 들어 있는 배열을 값으로 반환하는 이터레이터를 반환한다.
console.log(arr.entries());
for (const obj of arr.entries()) {
    console.log(obj);
}

// keys() 배열의 요소의 인덱스를 값으로 가지는 이터레이터를 반환한다.
console.log(arr.keys());
for (const obj of arr.keys()) {
    console.log(obj);
}

// values() 배열의 요소의 데이터를 값으로 가지는 이터레이터를 반환한다.
console.log(arr.values());
for (const obj of arr.values()) {
    console.log(obj);
}

// toString() 배열의 요소를 문자열로 변환하여 쉼표로 연결한 문자열을 반환한다.