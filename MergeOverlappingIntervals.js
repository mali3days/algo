function mergeOverlappingIntervals(array) {
  array.sort((arr1, arr2) => arr1[0] - arr2[0]);

  let result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    let lastResult = result[result.length - 1];

    if (lastResult[1] > array[i][1]) {
      continue;
    } else if (lastResult[1] >= array[i][0]) {
      lastResult[1] = array[i][1];
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]])); // [[1, 2], [3, 8], [9, 10]]
