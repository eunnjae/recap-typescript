/**
 * Object Intersection
 */

// 동시에 충족할 수 없기에 never가 됨

// but,, 객체를 만들게 되면 동시에 충족하는 것을 만들 수가 ㅇㅇ
type PrimitiveIntersection = string & number;

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
  name: "jisoo",
  age: 22,
  company: "yg",
  companyRegistrationNumber: "xxxxyyyzzz",
};

// intersection & union 섞을 수 있다

type PetType = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
  // PersonType
  name: "eunjae",
  age: 20,

  // CompanyType
  company: "i",
  companyRegistrationNumber: "xxyyzz",

  // PetType
  petName: "wonbin",
  petAge: 7,
};
