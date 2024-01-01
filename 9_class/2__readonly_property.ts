/**
 * readonly 포로퍼티
 */

class Idol {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const wonbin = new Idol("wonbin", 22);

wonbin.age = 20;
// wonbin.name = 'bini' readonly는 값 재할당할 수 없당
