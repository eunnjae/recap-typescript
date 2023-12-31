// Statement & Expression

// statement (문장 )
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

//expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

// statement (문장 )
function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

// Expression
// 아래와 같은 표현의 장점은 같은 형태의 타입을 가지는 함수가 있을 때, 한번 타입을 선언한 뒤에 그 타입을 명명하기만 해 주면 따로 타입ㅁ을 추가로 표현해야할 필요가 없다는 것이다. => Expression 선호

type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function (x, y) {
  return x + y;
};

const sub2: CalculationType = function (x, y) {
  return x * y;
};

const mul2: CalculationType = function (x, y) {
  return x / y;
};
