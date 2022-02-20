/**
 *
 * input:
 * array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
 * target = 33
 *
 * output = 3 // Index of element
 *
 */

// Solution
function binarySearch(array, target) {
  let l = 0;
  let r = array.length - 1;
  let m = Math.floor((l + r) / 2);

  while (l <= r) {
    if (array[m] === target) return m;
    if (array[m] > target) {
      r = m - 1;
      m = Math.floor((l + r) / 2);
    } else if (array[m] < target) {
      l = m + 1;
      m = Math.floor((l + r) / 2);
    }
  }

  return -1;
}

binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73]); // 3
