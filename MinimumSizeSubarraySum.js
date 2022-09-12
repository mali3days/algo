/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minimumSizeSubarraySum1(target, nums) {
  let minSum = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;
  let calc = 0;

  while (right <= nums.length) {
    if (sum < target) {
      sum += nums[right];
      right++;
      calc++;
    } else {
      minSum = Math.min(minSum, calc);
      sum = sum - nums[left];
      left++;
      calc--;
    }
  }

  return minSum === Infinity ? 0 : minSum;
}

function minimumSizeSubarraySum2(target, nums) {
  let minSum = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      while (sum >= target) {
        sum -= nums[left];
        left++;
      }
      minSum = Math.min(minSum, right - left + 2);
    }
    right++;
  }

  return minSum === Infinity ? 0 : minSum;
}

console.log(minimumSizeSubarraySum1(7, [2, 3, 1, 2, 4, 3])); // => 2, as subarray [4,3] has the minimal length under the problem constraint.
console.log(minimumSizeSubarraySum2(7, [2, 3, 1, 2, 4, 3])); // => 2
