const MODULO = BigInt(Math.pow(10, 9) + 7);

function countTrapezoids(points: number[][]): number {
  const pointMap = new Map();

  for (const [_, y] of points) {
    pointMap.set(y, (pointMap.get(y) || 0) + 1);
  }

  let sum = 0n;
  let innerSum = 0n;

  for (const count of pointMap.values()) {
    if (count < 2) {
      continue;
    }

    const n = BigInt(count);
    const currentComb = (n * (n - 1n)) / 2n;
    sum = (sum + innerSum * currentComb) % MODULO;
    innerSum = (innerSum + currentComb) % MODULO;
  }

  return Number(sum);
}

function combinations(n: number, r: number) {
  if (n < r) {
    return 0;
  }

  if (r === 2) {
    return (n * (n - 1)) / 2;
  }

  let result = 1;
  for (let i = 0; i < r; i++) {
    result = (result * (n - i)) / (i + 1);
  }

  return Math.round(result);
}
