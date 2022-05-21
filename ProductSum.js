/**
 *
 * input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 *
 * output = 12
 *
 */

// Solution 1
// O(n) time | O(d) space
function productSum(array, depth = 1) {
  return array.reduce((sum, n) => {
    if (Array.isArray(n)) {
      depth += 1;
      sum = sum + depth * productSum(n, depth);
      depth -= 1;
      return sum;
    }

    sum += n;

    return sum;
  }, 0);
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]); // => 12
