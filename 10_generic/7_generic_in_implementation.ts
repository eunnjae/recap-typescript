/**
 * Generic in Implementation
 */

interface Singer <T, V>{
    name: T;
    sing(year:V):void;
}

class Bini implements Singer<string, number> {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    sing(year: number): void {
        console.log(`[${year}] ${this.name} sings`)
    }
}

const bini = new Bini('바건빈');
bini.sing(2023)

class Bini2<T, V> implements Singer<T, V> {
    name: T;
    constructor(name:T){
        this.name = name;
    }
    sing(year: V): void {
        console.log(`[${year}] ${this.name} sings`)
    }
}

const bini2 = new Bini2<string, number>('삐니')
bini2.sing(2002)