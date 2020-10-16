// 039 Array.prototype.reduce - 중복 요소 제거
// 원본 유지

const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values.reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
}, []);
console.log(result);

const result2 = values.filter((v, i, arr) => arr.indexOf(v) === i);
console.log(result2);

const result3 = [...new Set(values)];
console.log(result3);