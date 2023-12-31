/**
 * Extension
 */
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "박원빈",
  age: 22,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 23,
};

// interface 가 type extend 가능 반대도 가능
interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "이찬영",
  age: 20,
};

type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "은석",
  age: 21,
};

/**
 * multiple extending
 */

type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "은재",
  age: 22,
  breed: "포메",
};

interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "박원빈",
  age: 21,
  breed: "포메",
};

/**
 * Overriding
 */

type THeight = {
  height: number;
};

type TRectangle = THeight & {
  width: number;
  height: string;
};

// primitive 오버라이딩(인터섹션) => never type 이 됨
// const rectangle:TRectangle = {
//     height:,
//     width:100
// }

type TWidth = {
  width: number | string;
};

type TRectangle2 = TWidth & {
  width: number;
  height: number;
};

const rectangle: TRectangle2 = {
  height: 180,
  width: 20,
};

interface IHeight {
  height: number;
}

// interface는 아예 허락해주지 않음. never도 안된다~

// interface IRectangle extends IHeight {
//   height: string;
//   width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle2 extends IWidth {
  width: number;
  height: number;
}
