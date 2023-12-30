// Defining Function

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1} and ${person2} are dating`;
}

console.log(returnTwoCouples("I", "Wonbin"));

// Optional Parameter

function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}

console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
// 2번쨰 인자가 없으면 y는 무조건 20이다~
console.log(multiplyOrReturn2(10));
// 2번쨰 인자 있으면 y는 디폴트값이 아니라 given arguments값이 된다!
console.log(multiplyOrReturn2(10, 30));

// 나머지 매개변수
// 헷갈
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `너무 좋아 ${x}`);
}

console.log(getInfiniteParameters("이차녕", "박원빈", "라이주"));

// Return Type
function addTwoNumber(x: number, y: number) {
  return x + y;
}
