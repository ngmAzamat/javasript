import inquirer from "inquirer";
const arr = new Array();

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function open() {
  console.log("привет");
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "Действие",
      choices: ["🎲Бросить Кубик 🎲", "💍Сыграть в Войну Кольца💍"],
    },
  ]);

  kubik(answer.choices);
}

function kubik(choices) {
  console.log("Анализируем Данные");
  if (choices === "🎲Бросить Кубик 🎲") {
    console.log("🎲 Бросаем Кубы 🎲");
    const rndInt = randomIntFromInterval(1, 6);
    console.log(rndInt);
  } else {
    varOfRings();
  }
}

function kubikVarOfRings(a) {
  console.log("🎲 Бросаем Кубы 🎲");
  const rndInt = randomIntFromInterval(1, 6);
  if (rndInt === 1) {
    console.log("Персонаж🗡");
  }
  if (rndInt === 2) {
    console.log("Войско⚔️");
  }
  if (rndInt === 3) {
    console.log("Сбор🪖");
  }
  if (rndInt === 4) {
    console.log("Событие🔮");
  }
  if (rndInt === 5) {
    console.log("Войско/Сбор📯");
  }
  if (rndInt === 6 && a === 1) {
    console.log("Воля Запада📜");
  }
  if (rndInt === 6 && a === 2) {
    console.log("Око💍");
  }

  console.log(rndInt);
}

async function varOfRings() {
  console.log("привет");
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "За кого вы играете?⚔️",
      choices: ["Свет🛡", "Тьма🗡"],
    },
  ]);
  if (answer.choices === "Свет🛡") {
    kubikVarOfRings(1);
    kubikVarOfRings(1);
    kubikVarOfRings(1);
    kubikVarOfRings(1);
  } else {
    kubikVarOfRings(2);
    kubikVarOfRings(2);
    kubikVarOfRings(2);
    kubikVarOfRings(2);
    kubikVarOfRings(2);
    kubikVarOfRings(2);
    kubikVarOfRings(2);
  }
}
open();
