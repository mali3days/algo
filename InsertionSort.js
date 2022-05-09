/**
 *
 * input =  [8,5,2,9,5,6,3]
 *
 * output = [2,3,5,5,6,8,9]
 *
 */

// Solution 1
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (array[i] < array[j]) {
        const buff = array[j];

        array[j] = array[i];
        array[i] = buff;

        i--;
      }
    }
  }

  return array;
}

insertionSort([8, 5, 2, 9, 5, 6, 3]); // [2,3,5,5,6,8,9]
