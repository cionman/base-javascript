// 002 Date 생성자 함수

/*
    - Date 생성자 함수로 생성한 Date객체는 내부적으로 날짜와 시간을 나타내는 정수 값을 갖는다.
    - 이 값은 1970년 1월 1일 00:00:00(UTC)을 기점으로 Date객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.
    - 1970년 1월 2일 0시 는 내부적으로 정수값 (24h * 60m * 60s * 1000ms = 86400000)을 갖는다.
    - Date 생성자 함수로 객체를 생성하는 방법은 4가지가 있다.
 */

/*
    1. new Date()
 */

console.log(new Date()); //2020-11-01T16:27:55.816Z
//Date 생성자 함수를 new 없이 호출하면 Date객체를 반환하지 않고 날짜와 시간정보를 나타내는 문자열을 반환한다.
console.log(Date()); //Mon Nov 02 2020 01:28:34 GMT+0900 (GMT+09:00)

/*
    2. new Date(밀리초)
 */

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(new Date(86400000)); //1970-01-02T00:00:00.000Z


/*
    3. new Date(dateString)
    - Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.
    - Date.parse메서드에 의해 해석 가능한 형식이어야 한다.
 */

console.log(new Date('May 26, 2020 10:00:00')); // 2020-05-26T01:00:00.000Z
console.log(new Date('2020/03/26 10:00:00')); // 2020-03-26T01:00:00.000Z
console.log(new Date('2020-03-26 10:00:00')); // 2020-03-26T01:00:00.000Z

/*
    4. new Date(year, month[, day, hour, minute, second, millisecond])
    - year : 연을 나타내는 1900년 이후의 정수 0 부터 99는 1900 부터 1999로 처리된다.
    - month : 0 ~ 11까지의 정수 (0 = 1월)
    - day : 1 ~31까지의 정수
    - hour : 0 ~ 23 까지의 정수
    - minute : 0 ~ 59까지의 정수
    - second : 0 ~ 59까지의 정수
    - millisecond: 0 ~ 999까지의 정수

 */

//2020-03-01 00:00
console.log(new Date(2020, 2)); // 2020-02-29T15:00:00.000Z
//2020-03-26 10:00:00
console.log(new Date(2020, 2, 26, 10, 0, 0, 0));
