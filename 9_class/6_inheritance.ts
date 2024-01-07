/**
 * Inheritance
 */

class Parent {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}이 춤을 춥니다.`)
    }

}

class Child extends Parent{
    age: number;
    constructor(name: string, age:number){

       super(name);
        this.age = age;
    }
    sing(){
        console.log(`child: ${this.name}이 노래를 부릅니다.`)
    }

}

const eunjae = new Parent('eunjae');
const ari = new Child('아리',12);

eunjae.dance()
// eunaje.sing()

ari.dance();
ari.sing();

let person: Parent;
person = eunjae;
person = ari;
// 상속받으면 자식은 부모 타입이 될 수 있다.

let person2: Child;
person2 = ari;
// person2 = eunjae;
// 거꾸로는 안된다

/**
 * But, in TypeScript, only check type so possible
 */

/**
 * optional 프로퍼팅를 유의하지
 */
class Parent2 {
    name: string;

    constructor(name: string){
        this.name = name;

    }
}

class Child2 extends Parent2{
    age?: number;
    constructor(name: string,age?:number)
    {super(name);
        this.age=age;
}}

const eunjae2 = new Parent2('dmdwo');
const ari2 = new Child2('dmswo',20);

let child:Child2;
child = ari2;

child = eunjae2;
// 원래 안 됐었는데 가능해짐 why? -> age가 optional이라서..
