/**
 *
 * input  = [8, 5, 2, 9, 5, 6, 3]
 * output = [2, 3, 5, 5, 6, 8, 9]
 *
 */

// Solution
// O(n^2) time | O(1) space
function bubbleSort(array) {
  let isArraySorted = false;
  let counter = 1;

  while (!isArraySorted) {
    isArraySorted = true;

    for (let i = 0; i < array.length - counter; i++) {
      if (array[i] > array[i + 1]) {
        let n = array[i];
        array[i] = array[i + 1];
        array[i + 1] = n;
        isArraySorted = false;
      }
    }

    counter += 1;
  }

  return array;
}

bubbleSort([8, 5, 2, 9, 5, 6, 3]); // => [2, 3, 5, 5, 6, 8, 9]
