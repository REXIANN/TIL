function countCoveredBuildings(n: number, buildings: number[][]): number {
  const rMap = new Map();
  const cMap = new Map();

  for (const building of buildings) {
    const [r, c] = building;

    if (!Array.isArray(rMap.get(r))) {
      rMap.set(r, [c, c]);
    } else {
      const [minC, maxC] = rMap.get(r);
      if (c < minC) {
        rMap.set(r, [c, maxC]);
      }

      if (c > maxC) {
        rMap.set(r, [minC, c]);
      }
    }

    if (!Array.isArray(cMap.get(c))) {
      cMap.set(c, [r, r]);
    } else {
      const [minR, maxR] = cMap.get(c);

      if (r < minR) {
        cMap.set(c, [r, maxR]);
      }

      if (r > maxR) {
        cMap.set(c, [minR, r]);
      }
    }
  }

  let answer = 0;

  for (const building of buildings) {
    const [r, c] = building;
    const [minC, maxC] = rMap.get(r);
    const [minR, maxR] = cMap.get(c);

    if (minR < r && r < maxR && minC < c && c < maxC) {
      answer += 1;
    }
  }

  return answer;
}
