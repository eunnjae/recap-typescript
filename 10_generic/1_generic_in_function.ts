/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any){
    return value
}

const value = whatValue('test');

function genericWhatValue<T>(value: T):T {
    return value;
}
// generic을 사용하면, 타입의 선언을 실제 실행할 때로 미룰 수 있다!
const genericResult1 = genericWhatValue<string>('라이즈~')
// 자동 유추도 가능
let genericResult2 = genericWhatValue(123);
// 여러개를 제너릭으로 받을 수도 있다
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z){
    return{
        x,
        y,
        z
    }
}

const multipleGenericResult = multipleGenerics<number,string,boolean>(1,'2',true);
const multipleGenericResult2 = multipleGenerics(1,'2',true);

function getTuple<X, Y>(val1:X, val2:Y){
    return [val1, val2] as const
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand:string, codeName: string){
        this.brand = brand;
        this.codeName = codeName;
    }
}

function instantiator<T extends {new (...args:any[]): {}}>(constructor:T,
    ...args:any[]){
return new constructor(...args);
}

console.log(instantiator(Idol, 'wonbin',23))