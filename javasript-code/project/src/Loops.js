let count = 0;

while (count < 10) {
  console.log(count);
  count++;
}

let county = 0;
do {
  console.log(county);
  county++;
} while (county < 10);
{
}

for (let i = 0; i < 10; i++) {
  console.log(count);
}

for (let q = 0; q < 10; q++) {
  console.log(count);
  if (q === 3) {
    console.log("цикл прерван досрочно");
    break;
  }
}

let g = 0;
while (g < 10) {
  console.log(count);
  if (g === 3) {
    console.log("цикл прерван досрочно");
    break;
  }
  g++;
}

for (let f = 0; f < 10; f++) {
  console.log(count);
  if (f === 3) {
    console.log("цикл прерван досрочно");
    continue;
  }
}
