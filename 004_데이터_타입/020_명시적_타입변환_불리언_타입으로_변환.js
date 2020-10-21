// 020 명시적 타입 변환 - 불리언 타입으로 변환

console.log(Boolean('x')); // true
console.log(Boolean('')); // false
console.log(Boolean('false')); // true

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean({})); // true
console.log(Boolean([])); // true

