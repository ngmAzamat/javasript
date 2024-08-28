let counting = 10;
let newcounting = counting++;

console.log(counting);
console.log(newcounting);

counting = 10;
newcounting = ++counting;

console.log(counting);
console.log(newcounting);

console.log(!true);
console.log(!false);

const a = null;
const b = 100;

const result1 = a || b;
const result2 = a || b;

console.log(result1);
console.log(result2);

const a2 = 0;
const b2 = 100;

const result3 = a2 || b2;
const result4 = a2 || b2;

console.log(result3);
console.log(result4);

function block() {
  console.log("видно");
  return;
  console.log("не видно");
}

block();
