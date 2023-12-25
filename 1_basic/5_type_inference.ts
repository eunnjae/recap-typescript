// Type inference
// 타입 추론

let stringType = "string";
let booleanType = true;
let numberTyep = 30;

booleanType = false;

//const 선언시 조금 더 구체적인 타입으로 추론이 된다~!
const constStringType: "const string" = "const string";

let wonBin = {
  name: "박원빈",
  age: 2002,
};

// 객체 안에서 구체화된 값을 집어넣을 수도 있다.
const wonbinnie = {
  name: "박원빈" as const,
  age: 2002 as const,
};

// 단 객체는 좀 더 설정을 해주어야 함
// 캐스팅 -> 특정 타입으로 지정을 한다는 의미. 프로퍼티를 구체화할 떄도 쓰임.

//위와같은 경우 객체 프로퍼티 변경 불가능

// Array

let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5"];

numbers.push(6);
// numbers.push('6')

const number = numbers[0];
const nos = numbersAndString[0];

// tuple
const twoNumbers = [1, 3] as const;
