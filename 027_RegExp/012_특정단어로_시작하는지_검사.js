// 012 특정 단어로 시작하는지 검사


const url = 'https://example.com';

// 'http://' 또는 'https://'로 시작하는지 검사한다.
/^https?:\/\//.test(url); // -> true
/^(http|https):\/\//.test(url); // -> true