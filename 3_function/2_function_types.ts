// Function Type

// map 내부 콜백 함수를 argument로 받고싶다면?

type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["이찬영", "박원빈", "송은석"].map(callback);
};

console.log(runner((x) => `riize member: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x * y;
};

//  interface로 함수 타입 선언하기

interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
