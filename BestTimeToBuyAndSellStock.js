/**
 *
 * input = [7,1,5,3,6,4]
 *
 * output = 5
 *
 */

// Solution
function maxProfit(prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buyPrice < prices[i]) {
      const newProfit = prices[i] - buyPrice;
      if (newProfit > profit) {
        profit = newProfit;
      }
    } else {
      buyPrice = prices[i];
    }
  }

  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]); // => 5
