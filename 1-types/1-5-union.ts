{
  // Union Types: OR -> 발생하는 모든 경우의 수중에 한가지만 선택
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login-> 로그인 함수는 성공 할 수도 실패 할 수도 있다.
  //로그인 예제
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: {
      body: string;
    };
  };
  type LoginState = SuccessState | FailState; //로그인 스테이트로 정의해준것
  function logins(): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }
  //printLoginState(state: LoginState)
  //suceess ->🎉 body
  //fail -> 😂 reason
  function printLoginStates(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      /* console.log(`😭 ${state.reason}`) */
    }
  }
}
