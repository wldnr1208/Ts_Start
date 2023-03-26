{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  //계약서 같은 것
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //CoffeeMaker를 구현하는 아이
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_FRAMM_RER_SHOT: number = 7; //외부에서는 변경하지 못하게
    private coffeeBeans: number = 0;

    constructor(
      coffeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //비싼 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //차가운 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }
  //설탕제조기
  class CandySugarMixer implements SugarProvider {
    private getSuger() {
      console.log("getting some sugar from candy");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  //candy가 아니라 진짜 설탕
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log("getting some sugar from jar!!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class Nosugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  const CheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new Nosugar();

  const sweetCnadyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, CheapMilkMaker, noSugar);
  const coldlatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

  const sweetLatteMachine = new CoffeeMachine(12, CheapMilkMaker, candySugar);
}
