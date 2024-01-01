/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */

const dogOrCat =
  Math.random() > 0.5
    ? //강아지
      {
        name: "qufl",
        age: 33,
      }
    : //냥이
      {
        name: "dhfl",
        breed: "koshort",
      };

dogOrCat.name;
dogOrCat.age; // number | undefined
dogOrCat.breed; // string| undefined

// 위와 같은 경우를 보면 type스크립트가 잘못 유추를 해버림. 이럴 땐 type을 만들어야 함.

interface Mung {
  name: string;
  age: number;
}
interface Nyang {
  name: string;
  breed: string;
}

type MungOrNyang = Mung | Nyang;

const dogOrCat2: MungOrNyang =
  Math.random() > 0.5
    ? //강아지
      {
        name: "qufl",
        age: 33,
      }
    : //냥이
      {
        name: "dhfl",
        breed: "koshort",
      };
dogOrCat2.name;
// 아래에서는 에러가 남..
// dogOrCat2.age;
// dogOrCat2.breed;

// narrowing을 사용해주면 유추 가능!

if ("age" in dogOrCat2) {
  dogOrCat2;
  dogOrCat2.age;
  dogOrCat2.name;
} else {
  dogOrCat2;
  dogOrCat.name;
  dogOrCat.breed;
}
