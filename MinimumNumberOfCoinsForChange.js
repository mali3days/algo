function minNumberOfCoinsForChange(n, denoms) {
  const ways = new Array(n + 1).fill(Infinity);
  ways[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    const denom = denoms[i];

    for (let j = 0; j < ways.length; j++) {
      if (denom <= j) {
        ways[j] = Math.min(ways[j], ways[j - denom] + 1);
      }
    }
  }

  if (ways[n] === Infinity) {
    return -1;
  }

  return ways[ways.length - 1];
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10])); // 3
