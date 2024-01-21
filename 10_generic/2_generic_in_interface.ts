/**
 * Generic in Interface
 */

interface Caches<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Caches<string> = {
    data:['data1'],
    lastUpdate: new Date(),
}
// 자동유추 안됨
const cache2: Caches<number>= {
    data: [123, 456],
    lastUpdate: new Date()
}

// 제너릭 지정해주지 않을 때 사용할 기본값형식 지정 가능
interface DefaultGeneric<T = string>{
    data:T[];
}

const cache3: DefaultGeneric = {
    data: ['123']
}

// 아래는 number가 default가 아니므로 제너릭 형식 미지정시 오류가 남
// const cache4: DefaultGeneric = {
//     data: [123]
// }