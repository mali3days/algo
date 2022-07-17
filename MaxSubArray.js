/**
 *
 * input:
 * array = [-2,1,-3,4,-1,2,1,-5,4]
 *
 * output = 6
 *
 */

// Solution
// O(n) time | O(1) space
function maxSubArray(nums) {
  let maxSub = nums[0];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) currSum = 0;

    currSum += nums[i];

    maxSub = Math.max(currSum, maxSub);
  }

  return maxSub;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
