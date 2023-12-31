/**
 * Unknown Type
 */
// any와 굉장히 유사하나 조금 더 관대한 타입.

let anyValue: any;

anyValue = 24;
anyValue = null;
anyValue = "wonbin";
anyValue = [];
anyValue = {};
anyValue = true;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = null;
unknownValue = "wonbin";
unknownValue = [];
unknownValue = {};
unknownValue = true;
unknownValue = undefined;

// 할당에서 차이

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// unknown 타입을 갖고있는 값의 경우, 변수의 경우, any | unknown 타입의 또다른 변수에만 할당이 가능하다..!(변수값에서 또 다른 변수로 할당할 떄..)

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// 다 안 돼
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testVal: unknown;

if (isString(testVal)) {
  testVal;
} else {
  testVal;
}

/**
 * Union Type
 */

// Union의 경우 any를 제외하고 모든 타입 흡수함.
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;

/**
 * Intersection Type
 */

type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any; // 엥?
type anyAndU = any & unknown;

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
