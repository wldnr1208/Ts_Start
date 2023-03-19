{
  //Array
  const fruits: string[] = ["사과", "바나나"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  //Tuple -> 서로다른 타입을 함께 가질 수 있는 것 -> 권장하지 않음 -> interface, type alias, class로 대체해서 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; //name
  student[1]; //123
  const [name, age] = student;
}
