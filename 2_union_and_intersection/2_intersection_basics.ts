// Intersection

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "eunjae",
  age: 32,
  phone: "1234",
  address: "서울시",
};

type NumberAndString = number & string;
// primitie를 인터섹션으로 만들면 never type이 된다
