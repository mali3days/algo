/**
 *
 * input  = [1,2,3,1]
 * output = true
 *
 */

// Solution 1
// O(n) time | O(n) space
function containsDuplicate(nums) {
  const dic = {};

  for (let i = 0; i < nums.length; i++) {
    if (!dic[nums[i]]) {
      dic[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;
}

containsDuplicate([1, 2, 3, 1]); // => true
