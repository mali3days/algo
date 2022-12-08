function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denomIdx = 0; denomIdx < denoms.length; denomIdx++) {
    let denom = denoms[denomIdx];

    if (denom > n) break;

    for (let wayIdx = 0; wayIdx < ways.length; wayIdx++) {
      let wayN = ways[wayIdx];

      if (denom <= wayIdx) {
        ways[wayIdx] += ways[wayIdx - denom];
      }
    }
  }

  return ways[ways.length - 1];
}

console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25])); // 4
