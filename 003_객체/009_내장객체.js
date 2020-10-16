/*
ES 5 내장 객체
 */

var a = Object();  //일반 객체
var b = String();  //문자열 객체
var c = Number();  //숫자 객체
var d = Boolean(); //논리값 객체
var e = new Array(); //배열
var f = new Date(); // 날짜와 시간을 다루는 객체
var g = new Function(); //함수 객체
var h = new RegExp(); // 정규 표현식 객체
var i = new Error(); // 오류 객체
var j = new EvalError(); // eval() 함수와 관련된 오류를 표현하는 객체
var k = new RangeError(); // 값이 허용범위를 넘었을대 발생한 오류 객체
var l = new ReferenceError();  // 없는 변수를 참조할때 발생한 오류 객체
var m = new SyntaxError(); // 문법이 어긋날때 발생하는 오류 객체
var o = new TypeError(); // 값이 기대한 타입이 아닐때 발생하는 오류 객체
var p = new URIError(); // 잘못된 URI를 만났을때 발생한 오류 객체

/*
ES 6 추가 내장 객체
 */
var q = Symbol(); //심볼
var r = new Int8Array(); //부호가 있는 8비트 정수 배열;
var s = new Uint8Array();  //부호가 없는 8비트 정수 배열
var t = new Int16Array(); //부호가 있는 16비트 정수 배열
var u = new Uint16Array(); //부호가 없는 16비트 정수 배열
var v = new Int32Array(); //부호가 있는32비트 정수 배열
var w = new Uint32Array(); //부호가 없는 32비트 정수 배열
var x = new Float32Array(); //32비트 부동소수점 배열
var y = new Float64Array(); //64비트 부동소수점 배열
var z = new ArrayBuffer(); // 고정 길이 이진 데이터 버퍼를 생성
var aa = new DataView(z); // ArrayBuffer 데이터를 읽고 쓸수 있는 수단을 제공
var ab = new Promise(function (resolve, reject) {
    resolve();
}); // 처리 지연 및 비동기 처리를관리하는 수단을 제공
var ac = new Proxy({}, {}); // 객체의 기본적인 동작을 재정의 하는 기능을 제공
var ad = new Map(); //key / value 맵을 생성
var ae = new Set(); // 중복을 허용하지 않는 데이터 집합을 생성
var af = new WeakMap(); // 약한 참조를 유지하는 key/value 맵을 생성
var ag = new WeakSet(); // 약한 참조를 유지하는 고유한 데이터 집합을 생성

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);
console.log(u);
console.log(v);
console.log(w);
console.log(x);
console.log(y);
console.log(z);
console.log(aa);
console.log(ab);
console.log(ac);
console.log(ad);
console.log(ae);
console.log(af);
console.log(ag);
