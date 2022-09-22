/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInRotatedSortedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = parseInt((right + left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // => 4
// console.log(searchInRotatedSortedArray([7, 8, 0, 1, 2, 3, 4, 5, 6], 5)); // => 7
// console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)); // => -1
// console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // => 4
// console.log(searchInRotatedSortedArray([5, 1, 3], 5)); // => 0
// console.log(searchInRotatedSortedArray([5, 1, 2, 3, 4], 1)); // => 1
