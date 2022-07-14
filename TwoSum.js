/**
 *
 * input:
 * nums = [2,7,11,15],
 * target = 9
 *
 * output = [0, 1]
 *
 */

// Runtime: 110 ms, faster than 60.83%
// Memory Usage: 42.6 MB, less than 59.87%
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Runtime: 88 ms, faster than 80.53%
// Memory Usage: 43.3 MB, less than 26.58%
var twoSum2 = function (nums, target) {
  const halves = {};
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(halves[nums[i]])) {
      return [halves[nums[i]], i];
    } else {
      halves[target - nums[i]] = i;
    }
  }
  return false;
};

twoSum1([2, 7, 11, 15], 9); // [0, 1]
twoSum2([2, 7, 11, 15], 9); // [0, 1]
