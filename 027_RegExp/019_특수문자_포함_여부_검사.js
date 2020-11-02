// 019 특수문자 포함 여부 검사

const target = 'abc#123';

// A-Za-z0-9 이외의 문자가 있는지 검사한다.
(/[^A-Za-z0-9]/gi).test(target); // -> true

//특수문자를 선택적으로 검사할 수 있다.
(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi).test(target); // -> true

//특수문자 제거
target.replace(/[^A-Za-z0-9]/gi, ''); // -> abc123

