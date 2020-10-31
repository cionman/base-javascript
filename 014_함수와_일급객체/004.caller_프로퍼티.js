// 003 caller 프로퍼티
/*
    - caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티다.
    - 이후 표준화 예정도 없는 프로퍼티이므로 사용하지말고 참고로만 알아두자.
 */

function foo(func) {
    return func();
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar));
/*
caller : function foo(func) {
    return func();
}
 */

console.log(bar());
/*
    caller : function (exports, require, module, __filename, __dirname) {
// 003 caller 프로퍼티

function foo(func) {
    return func();
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar));
/*
caller : function foo(func) {
    return func();
}
 */