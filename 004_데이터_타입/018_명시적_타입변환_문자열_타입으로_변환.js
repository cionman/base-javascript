// 018 명시적 타입 변환 - 문자열 타입으로 변환
//내장 함수 사용
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"

console.log(String(true)); // "true"
console.log(String(false)); // "false"


//Object.prototype.toString 메서드를 사용
console.log((1).toString()); // "1"
console.log((NaN).toString()); // "NaN"
console.log((Infinity).toString()); // "Infinity"

console.log((true).toString()); // "true"
console.log((false).toString()); // "false"
