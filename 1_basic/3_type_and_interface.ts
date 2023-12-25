// Type and Interface

// Type 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = "male" | "femail";

// 원래 자바스크립트는 하나의 파일로 컴파일 된다.

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year: number;
};
const wonBin: IdolType = {
  name: "ParkWonBin",
  year: 2002,
};

// Interface doesn't have '='

interface IdolInterface {
  name: string;
  year: number;
}

const Anton: IdolInterface = {
  name: "LeeChanYoung",
  year: 2004,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const sungchan: IdolIT = {
  name: "jeongsungchan",
  year: 2001,
};

interface IdolOptional {
  name: string;
  year?: number;
}

const EunJae: IdolOptional = {
  name: "ChoiEunJae",
};

//anyway, the differences between interface and type tis that basically the shape of interface is object. but it's impossible for inteface to sentence primitive type like type does.
// So far that's the biggest difference between them.
