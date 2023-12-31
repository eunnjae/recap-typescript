// Overloading

// 파라미터를 하나 받거나 세개를 받는 함수

// 만약에 하나의 파라미터만 입력받는다면 아이돌 멤버들을 하나의 스트링으로 입력받는다.
// '이찬영 송은석 박원빈'

// 만약 세개의 파라미터를 받는다면 각각 파라미터를 각각의 파라미터값 입력받는다.
// '이찬영', '송은석', '박원빈'

function stringOrStrings(members: string): string;

function stringOrStrings(
  member1: string,
  member2: string,
  member3: string
): string;

function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `riize: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `riize: ${memberOrMembers}`;
  }
}
console.log(stringOrStrings("송은석", "이찬영", "박원빈"));
console.log(stringOrStrings("송은석, 이찬영, 박원빈"));
// console.log(stringOrStrings("박원빈", "송은석"));

// 웬만하면 오버로딩 no (그럼 왜 가르쳐 줌..?)
