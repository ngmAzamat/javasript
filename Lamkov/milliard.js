import { sum, sumBigInteger, gausSum } from "./sum.js";
const number = 1_000_000_000;

const start = performance.now();
const accum = sum(number);
const finish = performance.now();
const delta = finish - start;
console.log(delta);
console.log(accum);

const start2 = performance.now();
const accum2 = gausSum(number);
const finish2 = performance.now();
const delta2 = finish2 - start2;
console.log(delta2);
console.log(accum2);

const start3 = performance.now();
const accum3 = sumBigInteger(number);
const finish3 = performance.now();
const delta3 = finish3 - start3;
console.log(delta3);
console.log(accum3);

if (accum2 == accum3) {
  console.log("=");
} else {
  console.log("!=");
}

console.log(delta / delta2);

// for (let i = 1; i < 100; i++) {
//   const start3 = performance.now();
//   gausSum(i * 1_000_000);
//   const finish3 = performance.now();
//   console.log(finish3 - start3);
// }
