/**
 * Nested Object
 */

// not ntested
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const eunjae: NestedPerson = {
  identity: {
    name: "dmswo",
    age: 23,
  },
  nationality: "korean",
};

// Nested
type TPersonIdentity = {
  name: string;
  age: number;
};

type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};
// 위 두가지는 같아보이긴 하나 에러가 날 때 에러메시지에서 차이가 있음(객체가 길어질때 Nested 아닌경우 굉장히 알아보기 불편해질 수 있음).

const wonbin: TPerson = {
  identity: {
    name: "qkrdnjsqls",
    age: 22,
  },
  nationality: "korea",
};

// interface도 마찬가지~!
interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const chanyoung: IPerson = {
  identity: {
    name: "LeeChanYoung",
    age: 20,
  },
  nationality: "USA",
};
