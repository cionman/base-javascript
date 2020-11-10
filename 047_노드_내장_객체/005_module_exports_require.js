//005 module exports require
/*
    - module객체 말고  exports객체로도 모듈을 만들 수 있음
    - module.exports로 한번에 대입하는 대신, exports 객체에 하나씩 대입
    - module.exports === exports
 */


console.log(module.exports === exports); //true

console.log(this);
console.log(this === module.exports); //true
console.log(this === exports); //true

function whatIsthis() {
    console.log('function : ', this === exports, this === global);
}

whatIsthis(); // function :  false true

/*
    - 최상위 스코프에 존재하는 this는 module.exports(또는 exports) 객체를 가리킵니다.
    - 또한 함수선언문 내부의 this는 global 객체를 가리킨다.
 */


/*
    - require가 반드시 파일 최상단에 위치할 필요가 없고,
    module.exports 또한 최하단에 위치할 필요 없다는 것
    - require.cache객체에 require.js나 var.js 같은 파일이름이 속성명으로 들어있는 것을 볼 수 있음
    - 속성값으로는 각 파일의 모듈 객체가 들어 있음
    - 한번 require한 파일은 require.cache에 저장되므로  다음 번에 require할 때 새로 불러 오지 않고,
    require.cache에 있는 것이 재사용됨
    - require.main은 node실행시 첫모듈을 가리킴
 */
const variable = require('./module/var');
module.exports = '저를 찾아보세요';
console.log(variable);
console.log(variable.odd);
console.log(variable.even);

console.log(require.cache);
console.log(require.main === module); //true
console.log(require.main.filename); // /Users/mac/Documents/02.Base/04. Javascript/base-javascript/047_노드_내장_객체/005_module_exports_require.js
