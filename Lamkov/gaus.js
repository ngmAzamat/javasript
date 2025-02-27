import { sum } from "./sum.js";

const start = performance.now();

const accum = sum(1_000_000_000);

const finish = performance.now();

const delta = finish - start;
console.log(delta);
console.log(accum);
