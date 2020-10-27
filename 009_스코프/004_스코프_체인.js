// 004 스코프 체인

/*
    - 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.
    - 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다.
 */

var x = 'global x';
var y = 'global y';

function outer() {
    var z = 'outer local z';
    console.log(x); //global x
    console.log(y); //global y
    console.log(z); // outer local z

    function inner() {
        var x = 'inner local x';

        console.log(x); // inner local x
        console.log(y); //global y
        console.log(z); // outer local z
    }

    inner();
}

outer();
console.log(x); //global x
//console.log(z); // ReferenceError