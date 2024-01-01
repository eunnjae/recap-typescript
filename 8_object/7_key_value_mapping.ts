/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginatedUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginatedUsers: State | undefined;
  banUser: State | null;
};

// 아래 선언은 GlobalApiStatus의 변화를 유지할 수 있는 선언
type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginatedUsers: GlobalApiStatus["paginatedUsers"];
  banUser: GlobalApiStatus["banUser"];
};

// 고런데 이것마저 귀찮아지면?
// k를 변수로 값에 사용할 수 있다.
// tada 아래 선언은 위 선언과 같음. 근데 훨씬 짧죠?
type UserApiStatus3 = {
  [k in "getUser" | "paginatedUsers" | "banUser"]: GlobalApiStatus[k];
  // getUser:
  // paginatedUsers:
  // banUSer:
};

// 추가적 기능(맛보기) 유틸리티타입
// 위에랑 또 똑같다~
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "banUser" | "paginatedUsers"
>;

// 제외하는 건 없어요?
type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof (굉장히 중요) 객체의 키값들을 유니온으로 가져올 수 있다
 */
type Allkeys = keyof GlobalApiStatus;

const key: Allkeys = "getUser";

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

// 마지막거 빼야지! user utility Exclude
type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]?: GlobalApiStatus[k];
};

// bonus

interface LoadingStatus {
  typee: "loading";
  data: string[];
}

interface ErrorStatus {
  typee: "error";
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

// type StatusType = FetchStatus.typee
