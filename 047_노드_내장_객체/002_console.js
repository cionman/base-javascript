//002 console

/*
    - 브라우저 window 대신 global 객체안에 들어 있으며, 브라우저에서의 console과 거의 비슷함
    - console.time(레이블): console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정함
    - console.log(내용): 평범한 로그를 콘솔에 표시, console.log(내용, 내용,내용) 처럼 여러 내용을 동시에 표시할 수 있음
    - console.error(에러 내용): 에러를 콘솔에 표시
    - console.table(배열) : 배열의 요소로 객체리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됨
    - console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용, 첫번째 인수로 객체, 두번째 인수로 옵션을 넣는데
    옵션의 colors를 true로 하면 console에 색이 추가되어 보기가 편해짐, depth는 객체 안의 객체를 몇단계까지 보여줄지 결정
    기본값은 2

    - console.trace(레이블): 에러가 어디서 발생했는지 추적할수 있게함, 일반적으로 에러 발생시 에러 위치를 알려주므로
    자주 사용하지는 않지만, 위치가 나오지 않는다면 사용할만함
 */

const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        }
    }
};
console.time('전체 시간');

console.log('평범한 로그', '쉼표로', '구분해', '여러값을', '찍을 수 있습니다.'); // 평범한 로그 쉼표로 구분해 여러값을 찍을 수 있습니다.
console.log(string, number, boolean); // abc 1 true
console.error('에러 메세지는 console.error');

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988, test: 'test' }]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });
console.dir(obj);
console.log(obj);

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {
}
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적');
}

function a() {
    b();
}

a();

console.timeEnd('전체 시간');