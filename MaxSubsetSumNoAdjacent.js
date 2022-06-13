/**
 *
 * input:
 * array = [75, 105, 120, 75, 90, 135],
 *
 * output = 330 // 75 + 120 + 135
 *
 */

// Solution
// O(n) time | O(n) space
function maxSubsetSumNoAdjacent1(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let maxSums = [array[0], Math.max(array[0], array[1])];

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }

  return maxSums[maxSums.length - 1];
}

// O(n) time | O(1) space
function maxSubsetSumNoAdjacent2(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let second = array[0];
  let first = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    let current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }

  return first;
}

maxSubsetSumNoAdjacent1([75, 105, 120, 75, 90, 135]); // 330
maxSubsetSumNoAdjacent2([75, 105, 120, 75, 90, 135]); // 330
