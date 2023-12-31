/**
 * Type vs Interface
 */

// Object 선언 시
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// Function을 선언할 떄
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있으나
 * interface에서는 할 수 없는 것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기 (interface는 내부에서만 가능함)
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못 하는 것
 */

// interface merging : interface선언을 중복 선언을 하면 이 둘이 또는 세네다서~~~  무한하게 전부 중첩가능
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  height: 170,
  width: 20,
};

/**
 * Interface Merging
 */

class Review {
  // 프로퍼티 -> instance에 귀속이 되고
  getY = (x: number) => {
    return x;
  };

  // 메서드 -> prototype에 귀속이 된다
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  // 프로퍼티는 오버라이딩이 안 됨
  // getY:(y: number) => number;
}

interface GetXnY2 {
  // 아래는 메서드임
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number;
  // tada 오버라이딩이 됨.
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};
