{
  /*   //javaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //typeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //javaScript
  function jsFetchNum(id) {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //javaScript
  function FetchNum(id: string): Promise<number> {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } */

  //javaScript => TypeScript
  //optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna", undefined);

  //Default parameter -> 아무것도 전달하지 않아도
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
