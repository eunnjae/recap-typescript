// Enum

//API요청을 한다
// 상태는 4가지

function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // 작업을 한다.

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

// console.log(runWork() === "DONE");

//위와같은경우 비교시 스펠링이 틀릴시 매우 위험

enum State {
  DONE = "DONE",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}

function runWork2() {
  let state = State.DONE;

  try {
    state = State.INITIAL;
    // 작업을 한다.

    state = State.LOADING;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork2() === State.DONE);
