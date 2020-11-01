// 004 Date 프로토타입 메서드
/*
    1. Date.prototype.getFullYear
    - 연도를 나타내는 정수 반환
 */
console.log(new Date('2020-07-24').getFullYear()); //2020

/*
    2. Date.prototype.setFullYear
    - Date객체 연도를 나타내는 정수를 설정한다.
    - 연도 이외에 옵션으로 월 일 도 설정할 수 있다.
 */

const today = new Date();
today.setFullYear(2000);
console.log(today); //2000-11-01T16:48:11.171Z
console.log(today.getFullYear()); //2000
today.setFullYear(1900, 0, 3);
console.log(today); //1900-01-02T17:21:02.697Z
/*
    3. Date.prototype.getMonth
    - 월을 나타내는 0 ~ 11의 정수를 반환한다. 1월은 0, 12월은 11이다.
 */

console.log(new Date('2020-07-24').getMonth()); //6

/*
    4. Date.prototype.setMonth
    - 월을 설정한다.
 */
const today2 = new Date();

today2.setMonth(0); //1월
console.log(today2); //2020-01-01T16:51:53.270Z
today2.setMonth(10, 5); // 2020-11-04T16:52:26.218Z
console.log(today2);

/*
    5. Date.prototype.getDate
    - 날짜 1 ~ 31의 정수 반환
 */
console.log(new Date('2020-07-24').getDate()); //24

/*
    6. Date.prototype.setDate
    - 날짜 설정
 */
const today3 = new Date();
today3.setDate(3);
console.log(today3); // 2020-11-02T16:54:10.574Z, UTC여서 이렇게 표시됨

/*
    7. Date.prototype.getDay
    - 요일을 나타내는 정수 반환
    - 0 : 일요일
    - 6 : 토요일
 */
console.log(new Date('2020-07-24').getDay()); //5

/*
    8. Date.prototype.getHours 시간 얻기
    9. Date.prototype.setHours 시간 설정 (옵션 분 초 밀리초 추가 설정 가능)
    10. Date.prototype.getMinutes 분 얻기
    11. Date.prototype.setMinutes 분 설정 (옵션 초 밀리초 추가 설정 가능)
    12. Date.prototype.getSeconds 초 얻기
    13. Date.prototype.setSeconds 초 설정 (옵션 밀리초 추가 설정 가능)
    14. Date.prototype.getMilliseconds 밀리초 얻기
    15. Date.prototype.setMilliseconds 밀리초 설정
 */

/*
    16. Date.prototype.getTime
    - 1970년 1월 1일 00:00 기점으로 Date객체의 시간까지 경과된 밀리초를 반환한다.
    17. Date.prototype.setTime
    - 밀리초로 설정한다.
 */
console.log(new Date('1970-01-02').getTime()); //86400000

const today4 = new Date();
today4.setTime(86400000);
console.log(today4); // 1970-01-02T00:00:00.000Z

/*
    18. Date.prototype.getTimezoneOffset
    - UTC와 Date객체에 지정된 로켈 시간과의 차이를 분단위로 반환한다.
 */

console.log(new Date().getTimezoneOffset()); // -540 , 분단위다.

/*
    19. Date.prototype.toDateString
    - 사람이 읽을 수 있는 형식의 문자열로 Date객체의 날짜를 반환한다.

 */

console.log(new Date('2020-07-24 12:30').toString()); //Fri Jul 24 2020 12:30:00 GMT+0900 (GMT+09:00)
console.log(new Date('2020-07-24 12:30').toDateString()); //Fri Jul 24 2020

/*
    20. Date.prototype.toTimeString
 */
console.log(new Date('2020-07-24 12:30').toTimeString()); //12:30:00 GMT+0900 (GMT+09:00)

/*
    21. Date.prototype.toISOString
    - ISO8601형식으로 Date객체의 날짜와 시간을 표현한 문자열을 반환한다.
 */

console.log(new Date('2020-07-24 12:30').toISOString()); //2020-07-24T03:30:00.000Z
console.log(new Date('2020-07-24 12:30').toISOString().slice(0, 10).replace(/-/g, '')); // 20200724

/*
    22. Date.prototype.toLocaleString
    - 로켈 정보 기준으로 날짜와 시간을 표현한 문자열을 반환한다.
    - 인수를 생략한 경우 시스템 로켈 정보를 사용한다.
 */

const today5 = new Date('2020-07-17 12:30');

console.log(today5.toString()); // Fri Jul 17 2020 12:30:00 GMT+0900 (GMT+09:00)
console.log(today5.toLocaleString()); // 2020-7-17 12:30:00
console.log(today5.toLocaleString('en-us')); // 7/17/2020, 12:30:00 PM

/*
    23. Date.prototype.toLocaleTimeString
    -시간 문자열을 반환한다.
 */
console.log(today5.toLocaleTimeString()); // 12:30:00

