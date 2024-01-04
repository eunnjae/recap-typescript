/**
 * Class는 type이 될 수도, 값이 될 수도 있다.
 * Class as type and Value
 */

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  bark() {
    return `${this.name}가 짖습니다.`;
  }
}

// ori의 type은 Dog (class임)=> typescript와 javascript에 공존하는 형태다!

let ori = new Dog("오리");
console.log(ori.bark());

// ori = '오리' (안됨)
// But.. 특수한 개체로는 가능

ori = {
  name: "별이",
  bark(): string {
    return `${this.name}가 왈왈해요.`;
  },
};

console.log(ori.bark());

// 쟈스에서 객체는 type과 같다
