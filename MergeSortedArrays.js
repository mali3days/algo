// imput: arr1 = [0, 3, 4, 31]
//      : arr2 = [4, 6, 30]
// output:  [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let item1 = arr1[0];
  let item2 = arr2[0];
  let i = 1;
  let j = 1;

  while (item1 || item2) {
    if (!item2 || item1 < item2) {
      mergedArray.push(item1);
      item1 = arr1[i];
      i++;
    } else {
      mergedArray.push(item2);
      item2 = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); // => [0, 3, 4, 4, 6, 30, 31]
