// 001 os
/*
    os 모듈
    - 운영체제의 정보를 가져옴
    - 예제 이외에 os.constants라는 객체가 있는데, 각종 에러와 신호에 대한 정보가 담겨져 있음
    - 운영체제별로 다른 서비스를 제공하고 싶을 때 유용

 */

const os = require('os');

console.log('운영체제 정보 ----------');
console.log('os.arch():', os.arch()); // process.arch와 동일
console.log('os.platform():', os.platform()); // process.platform과 동일
console.log('os.type():', os.type()); // 운영체제 종류
console.log('os.uptime():', os.uptime()); //운영체제 부팅 이후 흐른시간 초
console.log('os.hostname():', os.hostname()); // 컴퓨터 이름
console.log('os.release():', os.release()); // 운영체제 버전

console.log('경로 -------------------');
console.log('os.homedir():', os.homedir()); // 홈 디렉토리 경로
console.log('os.tmpdir():', os.tmpdir()); //임시 파일 저장 경로

console.log('cpu 정보 -----------------');
console.log('os.cpus():', os.cpus()); /// cpu 정보
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보 -----------------');
console.log('os.freemem():', os.freemem());   // 사용 가능 메모리
console.log('os.totalmem():', os.totalmem());  // 전체 메모리

