function firstDuplicateValue(array) {
  for (value of array) {
    let absValue = Math.abs(value);

    if (array[absValue - 1] < 0) {
      return absValue;
    } else {
      array[absValue - 1] *= -1;
    }
  }

  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])); // => 3
