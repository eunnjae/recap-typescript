/**
 * Object
 */

const silverAsh = {
  name: "eunjae",
  age: 22,
};

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

const iPerson: IPerson = {
  name: "iu",
  age: 20,
};

const tPerson: TPerson = {
  name: "meu",
  age: 20,
};

iPerson.name;
tPerson.age;
