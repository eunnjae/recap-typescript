/**
 * Method에서 Generic 사용하기
 */

class Idol<T>{
    id: T;
    name: string;

    constructor(id: T, name:string){
        this.id = id;
        this.name =name;
    }
    sayHello<Time>(logTime: Time) {
        return`[${logTime} 안녕 내 이름은 ${this.name}이고 ID는 ${this.id}입니다.]`
    }
}

const wonbin = new Idol('a','wonbin');

console.log(wonbin.sayHello('2023'));
console.log(wonbin.sayHello(1999));

class Message<T> {
    sayHello<Time>(logTime:Time, message:T){
        console.log(`logTime ${typeof logTime} / message: ${typeof message}`)
    }
}

const message = new Message<string>();
message.sayHello<number>(2000,'하이~!');

class DuplicatedGenericName<T>{
    sayHello<T>(logTime:T){
console.log(`logTime: ${typeof logTime}`)
    }
}
const duplicate = new DuplicatedGenericName<string>();
// class의 제너릭과 method의 제너릭이 동시에 선언되면 method의 제너릭이 우선시 된다!

duplicate.sayHello<number>(123);

// 애초에 헷갈리니까 중복되게 사용하지 말것!