var now = new Date();

console.log(now.getFullYear()); // 연도
console.log(now.getMonth()); // 월, 0부터 시작 4라면 5월
console.log(now.getDate()); // 날짜
console.log(now.getDay()); //  요일 일요일은 0
console.log(now.getHours()); //시각
console.log(now.getMinutes()); //분
console.log(now.getSeconds());  // 초
console.log(now.getMilliseconds()); // 시각의 밀리초
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.getUTCHours());
console.log(now.toUTCString());
