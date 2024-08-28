try {
  ("use strict");
  let message;
  let _default;

  confirm("ты готов");

  const battle = "mohach";
  const victory = "ottoman Victory!";
  const lose = "ottoman lose!";

  const UserAnswer = prompt(
    (message = "битва при Мохаче(1686) или битва при Мохаче(1526)"),
    (_default = 1686)
  );
  let ages = UserAnswer;
  if (!ages) {
    throw "не заполененно поле";
  }
  if (ages == "1686") console.log(lose);
  else if (ages == "1526") console.log(victory);
} catch (error) {
  console.log("Возникла ошибка:", error);
}
