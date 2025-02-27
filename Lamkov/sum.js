export function sum(counter) {
  let accum = 0;
  for (let i = 0; i <= counter; i++) {
    accum = accum + i;
  }
  return accum;
}

export function gausSum(n) {
  let result = (n * (n + 1)) / 2;

  return result;
}

export function sumBigInteger(counter) {
  let accum = 0n;
  for (let i = 0; i <= counter; i++) {
    accum += BigInt(i);
  }
  return accum;
}
