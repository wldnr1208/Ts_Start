{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_FRAMM_RER_SHOT: number = 7; //여기서 number는 추상이 되기 때문에 지워도 되지만 명시적으로 적고싶으면 number선언을 해준다.

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_FRAMM_RER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_FRAMM_RER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_FRAMM_RER_SHOT;
  const coffee = makeCoffee(2);

  console.log(coffee);
}
