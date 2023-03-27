//인터페이스 1개에 서로 다른 class 2개를 만들었다.

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("full time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log("part time");
  }
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 진짜 별로다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭은 제네릭인데 Employee를 확장한 애들만 사용가능해!
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "dog",
};

console.log(getValue(obj, "name")); //ellie
console.log(getValue(obj, "age")); //20
console.log(getValue(obj2, "animal")); //dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
