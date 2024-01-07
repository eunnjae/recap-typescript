/**
 * Override
 */

class Parent3 { 
    shout(name:string) {
return `${name}아 안녕!`
    }
}

class WrongChild extends Parent3 {
    // override 할 때는 몇가지 룰이 있다.
    // 1) 부모 메서드와 반환 타입이 일치해야 한다.
    // 2) 부모 메서드에 필수인 파라미터들이 존재해야 한다.
    // 3) 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안 된다

}

class chiild3 extends Parent3 {
    // 부모에 존재하지 않는 파라미터는 optional로 만들어 줘야 한다.
    shout(name:string, me?:string){
        if(!me){
            return super.shout(name)
        } else {return super.shout(name) + `내 이름은 ${me}이야.`}
        
    }
}

const chiild = new chiild3();
console.log(chiild.shout('wonbin'));
console.log(chiild.shout('wonbin','anton'))

/**
 * 속성 override
 */

