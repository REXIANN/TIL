function maximumProfit(prices: number[], k: number): number {
  let closed = Array.from({ length: k + 1 }, () => -1000000000);
  let long = Array.from({ length: k + 1 }, () => -1000000000);
  let short = Array.from({ length: k + 1 }, () => -1000000000);

  closed[0] = 0;

  for (const p of prices) {
    let nextClosed = [...closed];
    let nextLong = [...long];
    let nextShort = [...short];

    for (let i = 1; i <= k; i++) {
      nextClosed[i] = Math.max(closed[i], long[i] + p, short[i] - p);
      nextLong[i] = Math.max(long[i], closed[i - 1] - p);
      nextShort[i] = Math.max(short[i], closed[i - 1] + p);
    }

    closed = nextClosed;
    long = nextLong;
    short = nextShort;
  }

  return Math.max(...closed);
}
