{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //계약서 같은 것
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //CoffeeMaker를 구현하는 아이
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_FRAMM_RER_SHOT: number = 7; //외부에서는 변경하지 못하게
    private coffeeBeans: number = 0;

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_FRAMM_RER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_FRAMM_RER_SHOT;
    }

    private preheat(): void {
      //외부에서 부르지마 private
      console.log(`heating up....`);
    }

    private extract(shots: number): CoffeeCup {
      console.log(`public ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("steaming some milk");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //super를 이용하면 부모에서 함수를 받아올수있다.
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  } //오버라이팅
  const machine = new CoffeeMachine(23);
  const latteMachine = new CoffeeLatteMachine(23, "ssss");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
