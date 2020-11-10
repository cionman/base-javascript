//007 process
/*
    - process객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있음
 */

//설치된 노드 버전
console.log(process.version); //v12.13.0

//프로세서 아키택쳐 정보
console.log(process.arch); //x64

//운영체제 플랫폼 정보
console.log(process.platform); //darwin(맥)

//현재 프로세스의 아이디
console.log(process.pid); //48933

//프로세스가 시작된 후 흐른 시간, 단위는 초
console.log(process.uptime());

// 노드 경로
console.log(process.execPath);

// 현재 프로세스가 실행되는 위치
console.log(process.cwd());

// 현재 cpu 사용량
console.log(process.cpuUsage()); // { user: 31458, system: 7527 }

// 시스템 환경 변수
console.log(process.env);

