/**
 *
 * input = [1,2,3]
 *
 * output = [1,3,2]
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function sort(arr, from) {
  var sorted = arr.slice(from).sort((a, b) => {
    return a - b;
  });

  arr.splice(from, sorted.length, ...sorted);

  return arr;
}

function nextPermutation(nums) {
  let lastPeakIdx = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      lastPeakIdx = i;
    }
  }

  if (lastPeakIdx === -1) {
    for (let i = 0; i < nums.length / 2; i++) {
      swap(i, nums.length - 1 - i, nums);
    }
  }

  let index = lastPeakIdx;
  for (let i = lastPeakIdx; i <= nums.length; i++) {
    if (nums[i] > nums[lastPeakIdx - 1] && nums[i] < nums[lastPeakIdx]) {
      index = i;
    }
  }

  swap(index, lastPeakIdx - 1, nums);
  sort(nums, lastPeakIdx);
}

nextPermutation([1, 2, 3]); // => [1,3,2]
