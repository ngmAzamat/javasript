const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function logika(index, number) {
  if (index === number - 1) {
    console.log("Логика");
  }
}

const number = 4;

const res = numbers.indexOf(number);

logika(res, number);

console.log(res);
