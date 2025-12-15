function getDescentPeriods(prices: number[]): number {
  let i = 0;
  let answer = 0;
  let smooth = 1;

  while (i < prices.length) {
    if (i + 1 < prices.length) {
      const current = prices[i];
      const next = prices[i + 1];

      if (current === next + 1) {
        smooth += 1;
      } else {
        answer += (smooth * (smooth + 1)) / 2;
        smooth = 1;
      }
    } else {
      answer += (smooth * (smooth + 1)) / 2;
    }

    i += 1;
  }

  return answer;
}
