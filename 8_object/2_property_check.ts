/**
 * Property Check
 * 초과 속성 검사
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};
// type을 선언을 하고서 실제로 객체 값, 리터러리 를 초기화할 떄 넣으면 그때는 정확히 타입에 선언되어있는 대로 프로퍼티들을 입력해야함 (초과속성이 허락X)
const iu = {
  name: "아이유",
  age: 30,
};
// But, 이미 선언이 되어있는 객체 변수를(iu) 다른 변수에다 옮겨 넣을 때 typescipt는 이 객체의 type을 봄. => 초과되는 값들이 있어도 할당을 하게 됨(내로잉으로 착각) => 실제로는 모든 값이 다 할당 됨
const testName: TName = iu;
const testAge: TAge = iu;
