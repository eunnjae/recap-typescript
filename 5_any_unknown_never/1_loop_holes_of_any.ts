/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase();
// (number as any).toUpperCase(); // runtime에 에러남

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

let args1: any = "원비니";
let args2: any = true;

multiplyTwo(args1, args2); // runtime에 에러남
// multiplyTwo("원비니", true);

// any로 캐스팅할 경우 자동완성이 안 된다.

let wonbin: any = { name: "wonbin", age: 21 };
// wonbin.

// refactoring시 굉장히 위험하다.(error메시지를 받을 수 없다)
const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x, y);
};

const callback = (x: number, y: number) => {
  return x * y;
};

console.log(callbackRunner(5, 4, callback));
