{
  type CoffeeCup = {
    shots: number;
    hasSugar?: boolean;
    hasMilk: boolean;
  };

  //계약서 같은 것
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //CoffeeMaker를 구현하는 아이 abstract-> 추상적인아이 , abstract object를 만들수 없다.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_FRAMM_RER_SHOT: number = 7; //외부에서는 변경하지 못하게
    private coffeeBeans: number = 0;

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  } //오버라이팅

  class SweetCoffeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
        hasMilk: true,
      };
    }
  }
  const machines: CoffeeMaker[] = [
    new CoffeeLatteMachine(16, "1"),
    new SweetCoffeMaker(16),

    new CoffeeLatteMachine(16, "1"),
    new SweetCoffeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("------------------");
    machine.makeCoffee(1);
  });
}
