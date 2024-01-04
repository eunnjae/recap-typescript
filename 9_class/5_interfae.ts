/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}
// Animal에 정의되어있는건 전부 정의를 해야한다/.. 그럼 굳이 왜 implements 하지..?
class Doggy implements Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  jump(): string {
    return `${this.name} jumps`;
  }
}

const sari: any = new Doggy("오리", 3);

function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}

if (instanceOfAnimal(sari)) {
  ori;
}
/**
 * 다중 인터페이스 구현
 */

interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name}이 점프를 합니당`;
  }
  // Pet
  bark(): void {
    console.log("nyang");
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name}이 점프를 합니당`;
  }
  // Pet
  bark(): void {
    console.log("nyang");
  }
}

interface WrongInterface1 {
  name: string;
}

interface WrongInterface2 {
  name: number;
}

// primitive 두 타입의 인터섹션은 never이기 때문에 아래와 같은 표현은 불가능해진다.
// class Person implements WrongInterface1, WrongInterface2 {
// name:string;
// name:number;
// name: string| number;
// }

/**
 * constructor의 형태를 interface화 한다면..? (굉장히 중요)
 */

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 함수선언하듯 interface에 넣어주면 된다~
// constructor의 파라미터정의 파라미터값을 넣어주면 된당~
interface IdolConstructor {
  new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  return new constructor(name, age);
  //   return new Idol(name, age) 와 동일한 코드이다.
}

createIdol(Idol, "wonbin", 22);
