{
  //javaScript
  //primitive: number, string, boolean, bigint, symbol, null
  //object: function, array

  //number
  const num: number = 1;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //undefined -> 값이 있는지 없는지 모호 할 때 -> 단독으로 사용하지 않는다. -> 더 많이 이용
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null -> 값이 명확히 없다. -> 단독으로 사용하지 않는다.
  let person: null;
  let person2: string | null;

  //unknown -> 추상적이라 가능하면 쓰면 안됨
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any -> 가능하면 쓰지 않는다.
  let anything: any = 0;
  anything = "hello";

  //void -> 함수에서 어떤 것을 리턴하지 않을 때 사용
  function print(): void {
    console.log("hello");
    return;
  }

  //never
  function throwError(message: string): never {
    //message -> sever(log)
    throw new Error(message);
    /*     while(true){

    } */
  }
  //object
  let obj: object; // 쓰지 않는다.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
