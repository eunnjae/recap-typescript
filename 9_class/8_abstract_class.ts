/**
 * Abstract class (js에는 없는 개념/ 대부분의 oop에는 있는 개념/ 인스턴스화를 하지 못하게 하는 기능)
 */

abstract class ModelWithId{
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(123);
// abstract class는 직접적으로 선언이 절대적으로 불가능이다.

// 그러면 어디다 쓰냐? -> 이 자체로는 인스턴스화될 일이 없는데 공유되는 값들이나 메서드들을 정의하고 싶을 때 !

class Product extends ModelWithId{

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
    // body입력하지 않고 정의만 입력할 수 있음
    abstract shout(name: string):string;
}

class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return '소리질러~';
    }
}