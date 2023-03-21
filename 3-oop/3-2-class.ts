{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMaker {
    static BEANS_FRAMM_RER_SHOT: number = 7; //class level -> class에서 한번 정의가 되고
    //이 class를 이용한 object 사이에서 모두 공유가 가능한 것을 멤버변수로 두게 되면 object만들 때마다 중복적으로 데이터생성
    //그래서 static을 붙인다. 만약 붙이지 않으면 instance level이라고 한다.
    coffeeBeans: number = 0; //instance (object) level
    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_FRAMM_RER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_FRAMM_RER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}

//class -> 변하지 않는 것
//instance -> 바뀌는 값
