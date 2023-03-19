//Type Inference -> 지금 간단해서 추론이 가능하지만 프로젝트에서는 사용하지 않는 것이 좋다.

let text = "hello"; // let text:string = "hello"; -> 원래 타입을 선언해 줘야하지만 딱 봐도 알 수 있다면 굳이 선언 안해도된다.
function print(message: "hello") {
  console.log(message);
}
print("hello"); //string이라고 인식(추론함)

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);
