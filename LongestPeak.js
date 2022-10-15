function longestPeak(array) {
  let longest = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      longest = longest > count ? longest : count;
      count = 1;
      let pointer = i;

      while (array[pointer] > array[pointer - 1]) {
        count++;
        pointer--;
      }
    } else if (count !== 0 && array[i] < array[i - 1]) {
      count++;
    }

    longest = longest > count ? longest : count;
  }

  return longest;
}

console.log(longestPeak([1, 3, 2]));
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
