{
  //function: login-> 로그인 함수는 성공 할 수도 실패 할 수도 있다.
  //로그인 예제
  type SuccessState = { result: "success"; response: { body: string } };
  type FailState = { result: "fail"; reason: string };
  type LoginState = SuccessState | FailState; //로그인 스테이트로 정의해준것
  function login(): LoginState {
    return { result: "success", response: { body: "logged in" } };
  }
  //printLoginState(state: LoginState)
  //suceess ->🎉 body
  //fail -> 😂 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
