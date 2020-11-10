//001 global
/*
    - 브라우저의 window와 같은 전역 객체
    - 모든 파일에서 접근 가능
    - 생략할수 있음
    - require함수도 global.require에서 global이 생략 된 것
 */

console.log(global);
/*
    Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}
 */

console.log(global.console);
/*
    {
  log: [Function: bound consoleCall],
  warn: [Function: bound consoleCall],
  dir: [Function: bound consoleCall],
  time: [Function: bound consoleCall],
  timeEnd: [Function: bound consoleCall],
  timeLog: [Function: bound consoleCall],
  trace: [Function: bound consoleCall],
  assert: [Function: bound consoleCall],
  clear: [Function: bound consoleCall],
  count: [Function: bound consoleCall],
  countReset: [Function: bound consoleCall],
  group: [Function: bound consoleCall],
  groupEnd: [Function: bound consoleCall],
  table: [Function: bound consoleCall],
  debug: [Function: bound consoleCall],
  info: [Function: bound consoleCall],
  dirxml: [Function: bound consoleCall],
  error: [Function: bound consoleCall],
  groupCollapsed: [Function: bound consoleCall],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  [Symbol(kBindStreamsEager)]: [Function: bound ],
  [Symbol(kBindStreamsLazy)]: [Function: bound ],
  [Symbol(kBindProperties)]: [Function: bound ],
  [Symbol(kWriteToConsole)]: [Function: bound ],
  [Symbol(kGetInspectOptions)]: [Function: bound ],
  [Symbol(kFormatForStdout)]: [Function: bound ],
  [Symbol(kFormatForStderr)]: [Function: bound ]
}
 */

const A = require('./module/globalA');
global.message = '안녕하세요';

//globalA 모듈에서도 global.message 값을 접근할 수 있음을 보여줌
console.log(A()); // 안녕하세요
