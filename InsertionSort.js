/**
 *
 * input =  [8,5,2,9,5,6,3]
 *
 * output = [2,3,5,5,6,8,9]
 *
 */

// Solution 1
// Best:      O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst:   O(n^2) time | O(1) space
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }

  return array;
}

function swap(i, j, array) {
  const buff = array[j];

  array[j] = array[i];
  array[i] = buff;
}

insertionSort([8, 5, 2, 9, 5, 6, 3]); // [2,3,5,5,6,8,9]
