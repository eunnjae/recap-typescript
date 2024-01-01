/**
 * Tuple
 */
let riizeMembers: string[] = ["wonbin", "anton"];

// 순서,갯수(형태) 지켜야 함
let numberAndStringTuple: [number, string] = [3, "wonbin"];

// 에러가 안나버림
numberAndStringTuple.push("eunseok");
console.log(numberAndStringTuple);

// 해결 방법(tuple을 좀 더 정확히 사용하려면 readonly를 사용하면 된다)
let unmodifiableTuple: readonly [number, string] = [22, "eunjae"];

// unmodifiableTuple.push(7);

/**
 * Tuple 유추하기
 */

let actresses = ["김고은", "수지", "박보영"];

// 위 를 튜플로 강제하고 싶다면
let actressesTuple = ["김고은", "수지", "박보영"] as const;
const actressesTupleConst = ["김고은", "수지", "박보영"] as const;

let stringArray: string[] = [...actressesTuple, ...actressesTupleConst];

/**
 * Named Tuple
 */

const namedTuple: [name: string, age: number] = ["silverash", 22];

/**
 * Assinging Tuple to Tuple
 * Tuple은 같은 타입끼리만 할당이 가능
 */

const tuple1: [string, string] = ["riize", "breeze"];

const tuple2: [number, number] = [3, 7];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 *  Tuple과 Array의 관계
 */

let riize: [string, string] = ["wonbin", "anton"];

let stringArr: string[] = riize;

// let riize2: [string, string] = stringArr;

/**
 * Multi Dimensional Tuple
 */

const tuple2D: [string, number][] = [
  ["silver", 9],
  ["gold", 9],
  ["bronze", 9],
];
