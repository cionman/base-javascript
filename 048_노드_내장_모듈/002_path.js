// 002 path

/*
    - 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
    - path 모듈이 필요한 이유증 하나는 운영체제별로 경로 구분자가 다르기 때문
    - 크게 윈도 타입과 POSIX(리눅스, 맥)타입으로 구분됨
        - 윈도우 : C:\Users\Blidkaga  \로 구분됨
        - POSIX : /home/blidkaga /로 구분됨
 */

const path = require('path');
const string = __filename;

console.log('path.sep :', path.sep); //경로 구분자
console.log('path.delimiter :', path.delimiter); //환경변수의 구분자
console.log('path.dirname() :', path.dirname(string)); // 파일이 위치한 폴더 경로
console.log('path.extname() :', path.extname(string)); // 파일의 확장자, . 포함
console.log('path.basename() :', path.basename(string)); // 파일 이름(확장자포함), 파일 이름만 표시하려면 두번째 인수에 확장자를 넣으면 됨
console.log('path.basename() - extname :', path.basename(string, path.extname(string))); // 파일 이름(확장자포함), 파일 이름만 표시하려면 두번째 인수에 확장자를 넣으면 됨
console.log('-----------------------');
console.log('path.parse() :', path.parse(string)); // 파일 경로를 root, dir, base, ext, name으로 분리
console.log('path.format():', path.format({
    dir: '/home/blidkaga',
    name: 'path',
    ext: '.js'
})); // path.parse() 한 객체를 파일 경로로 합침
console.log('path.normalize() :', path.normalize('/home////blidkaga///dir')); // /나 \를 실수로 여러번 사용했거나 혼용했을때 정상적인 경로로 변환
console.log('-----------------------');
console.log('path.isAbsolute() :', path.isAbsolute('./home')); // 파일의 경로가 절대 경로인지 상대경로인지 불리언 값으로 반환함
console.log('path.isAbsolute() :', path.isAbsolute('/home')); // 파일의 경로가 절대 경로인지 상대경로인지 불리언 값으로 반환함
console.log('-----------------------');
console.log('path.relative() :', path.relative('./module/var.js', './001_os.js')); // 경로를 두개 넣으면, 첫번째 경로에서 두번째 경로로 가는 방법을 알림
console.log('path.join()', path.join(__dirname, '..', '/users')); // 여러 인수를 넣으면 하나의 경로로 합침, 상대경로도 알아서 처리함
console.log('path.resolve()', path.resolve(__dirname, '..', 'users')); // 여러 인수를 넣으면 하나의 경로로 합침, join과 차이점은 아래에서...

/*
    join과 resolve 차이
    - /를 만나면 resolve는 절대경로로 인식해서 앞의 경로를 무시하고, join은 상대경로로 처리함

 */

console.log(path.join('/a', '/b', '/c')); // /a/b/c
console.log(path.resolve('/a', '/b', '/c')); // /c






