function maxProfit(k: number, prices: number[]): number {
  let buy = Array.from({ length: k + 1 }, () => -1000000000);
  let sell = Array.from({ length: k + 1 }, () => 0);

  for (const p of prices) {
    let nextBuy = [...buy];
    let nextSell = [...sell];

    for (let i = 1; i <= k; i++) {
      nextBuy[i] = Math.max(buy[i], sell[i - 1] - p);
      nextSell[i] = Math.max(sell[i], buy[i] + p);
    }

    buy = nextBuy;
    sell = nextSell;
  }

  return sell[k];
}
