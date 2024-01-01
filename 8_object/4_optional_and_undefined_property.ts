/**
 * Optional and Undefined Property
 */

// 타입의 프로퍼티를 optional로 선언하는 것과 undefined와 union하는 것은 차이가 있다.

interface Dog {
  name: string;
  age: number;
  // 종을 모르면 undefined
  breed?: string;
}

const byulE: Dog = {
  name: "별이",
  age: 12,
  breed: "alslvla",
};

const brachio: Dog = {
  name: "브라키오",
  age: 20,
};

// optional아닌경우 무조건 프로퍼티 직접 입력해주어야 한다.
interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

const nabi: Cat = {
  name: "나비",
  age: 7,
  breed: undefined,
};
