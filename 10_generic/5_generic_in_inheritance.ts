/**
 * Generic in Inheritance
 */

class BaseCache<T>{
    data: T[] = [];
}

class StringCache extends BaseCache<string>{}

const stringCache = new StringCache();
stringCache.data

// 이번에는 상속받는 클래스에서 타입을 넘겨받아봄
// 여기서 흥미로워지는 것은....

class GenericChild<T, Message> extends BaseCache<T>{
    message?: Message;

    constructor(message?: Message){
        super()
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');

console.log(genericChild.data); // []
console.log(genericChild.message); // error

/**
 * 제너릭의 inheritance
 */

interface BaseGeneric{
    name: string;
}

class Idol<T extends BaseGeneric>{
information:T;
constructor(information:T){
    this.information = information
}
}

const wonbin = new Idol({
    name:'wonbin',
    age: 23,
});

/**
 *  keyof 함께 사용하기
 */

const testObj = {
    a:1,
    b:2,
    c:3,
}

function objectParser<O, K extends keyof O>(obj:O, key: K){
    return obj[key];
}

const val = objectParser(testObj, 'c');

/**
 * Ternary
 * 1 === 2 ? true : false
 */

class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2{
    type:'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
    type:'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<FemaleIdol>= new FemaleIdol();