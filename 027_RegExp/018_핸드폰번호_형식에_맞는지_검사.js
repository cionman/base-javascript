// 018 핸드폰번호 형식에 맞는지 검사

const cellphone = '010-1234-5678';

/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone); // -> true

