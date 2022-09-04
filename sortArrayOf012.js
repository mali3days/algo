/**
 *
 * input = [0, 1, 2, 0, 1, 2]
 *
 * output = [0, 0, 1, 1, 2, 2]
 *
 */

// Solution 1
// O(n) time | O(1) space
function sortArrayOf012(arr) {
  let l = 0;
  let m = 0;
  let h = arr.length - 1;

  while (m <= h) {
    if (arr[m] === 0) {
      swap(l, m, arr);
      l++;
      m++;
    } else if (arr[m] === 1) {
      m++;
    } else if (arr[m] === 2) {
      swap(m, h, arr);
      h--;
    }
  }

  return arr;
}

function swap(i1, i2, arr) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

sortArrayOf012([0, 1, 2, 0, 1, 2]); // => [ 0, 0, 1, 1, 2, 2 ]
