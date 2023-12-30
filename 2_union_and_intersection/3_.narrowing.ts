// Narrowing은 Uniton타입에서 더욱 구체적인 타입으로 논리적으로 유추할 수 있게 되는 걸 의미한다.
// 아래와같이 유니온으로 선언을 했다하더라도 값을 통해 타입스크립트는 이 변수가 어떤 타입이 될지를 정확하게 유추할 수 있다.

// let numberOfString: number | string = "Code Factory";
// numberOfString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOfString.toFixed();

// Narrowing 종류
// 1) Assignment Narrowing
// 2) typeof Narrowing
// 3) Truthness Narrowing
// 4) Equality Narrowing
// 5) in operator narrowing
// 6) instanceof narrowing
// 7) discriminated union narrowing (차별된 유니언 내로잉)
// 8) exhasustiveness checking

// (1) Assignment Narrowing

let numbOrString: number | string = "아이유";

numbOrString.toString();

// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : "아이유";

if (typeof numbOrString === "string") {
  numbOrString;
} else {
  numbOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "트와이스"];

if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

// (4) Equallity Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ? 1123 : "아이유";

let stringOrBool2: string | boolean = Math.random() > 0.5 ? "라이즈" : true;

if (numbOrString2 === stringOrBool2) {
  numbOrString2;
} else {
  numbOrString2;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? "이찬영" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
} else {
  numberOrStringOrNull;
}

// (5) in operator narrowing

interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: "정성찬",
  age: 23,
};

let dog: Dog = {
  name: "오리",
  type: "포메",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

// in keyword를 통해 key값이 존재하는지 알 수 있다.
console.log("name" in human);
console.log("age" in human);

if ("type" in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : "codefactory";

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "포메",
      };

if (animal.type) {
  animal.height;
} else {
  animal.breed;
  animal.height;
}
// 위와같은 사례보다 (여러개 뭉뚱그려 선언) 여러개로 나누어 선언을 한 다음 유니언으로 묶어주는게 타입을 정확히 유추하는데 훨씬 더 유리
interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "포메",
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
} else {
  humanOrDog2;
}

// (8) Exhaustiveness Checking
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2;
    break;
  case "dog":
    humanOrDog2;
    break;
  default:
    humanOrDog2;

    const _check: never = humanOrDog2;
    break;
}
// 위 스위치문에서 human 또는 dog 타입이 아닌 경우는 존재할 수 없기 때문에 default는 never가 된다.

// default 에다가 마지막에 한 줄만 추가를 해주면 ts를 조금 더 스마트하게 활용할수 있다!
