/**
 *
 * input  = [1,2,3,4,5,6,7], 3
 * output = [5,6,7,1,2,3,4]
 *
 */

// Solution 1
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
}

// Solution 2
function rotate(nums, k) {
  if (k > nums.length) k = k % nums.length;

  rotateArray(nums, 0, nums.length - 1);
  rotateArray(nums, 0, k - 1);
  rotateArray(nums, k, nums.length - 1);
}

function rotateArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

rotate1([1, 2, 3, 4, 5, 6, 7], 3); // => [5,6,7,1,2,3,4]
rotate2([1, 2, 3, 4, 5, 6, 7], 3); // => [5,6,7,1,2,3,4]
