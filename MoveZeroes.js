/**
 *
 * input =  [0, 0, 1]
 * output = [1, 0, 0]
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let { length } = nums;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      length--;
    }
  }

  return nums;
}

moveZeroes([0, 0, 1]); // [1, 0, 0]
