{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //계약서 같은 것
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  //CoffeeMaker를 구현하는 아이
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_FRAMM_RER_SHOT: number = 7; //외부에서는 변경하지 못하게
    private coffeeBeans: number = 0;

    private constructor(coffeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  const Maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(Maker);
  const pro = new ProBarista(Maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}
