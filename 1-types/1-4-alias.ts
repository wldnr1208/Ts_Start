{
  // Type Aliases -> 내가 정하는 새로운 타입
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  //String Literal Types -> name은 name이란 타입으로 저장 무조건 name은 name이어야한다.

  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
