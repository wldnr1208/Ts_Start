{
  //Type Assertions -> 좋은 것은 아니다. 100프로 정확할 때만 사용한다.

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); //😱 !는 무조건 null이 아니야

  const button = document.querySelector("class")!; //-> 진짜진짜 100프로일때만 사용
}
