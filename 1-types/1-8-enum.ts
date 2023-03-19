{
  //Enum -> 이것도 가능한 쓰지 않는 것을 추천(타입이 정확하게 정의되지 않음)
  //RN에서는 union을 사용 할 수 없어서 Enum을 사용 하지만 웹에서는 Enum을 사용하지 않는다.

  //JavaScript에는 없다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  type DayOfWeek = "Monday" | "Tuesday" | "Wednesday"; //Enum은 옆에처럼 union타입으로 대채해서 사용 할 수 있다.
  enum Days {
    Monday = 1, //0 , 1로 정의해주면 1로 시작 Monday= mondey로도 가능
    Tuesday, //1
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Tuesday);
  const day = Days.Satarday;
  console.log(day);

  let dayOfWeek: DayOfWeek = "Monday";
}
