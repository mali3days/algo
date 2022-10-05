function isMonotonic1(array) {
  const increase = array[0] > array[array.length - 1];
  function checkMoreThen(el, i) {
    let a = true,
      b = true;

    if (array[i - 1]) {
      a = el <= array[i - 1];
    }

    if (array[i + 1]) {
      b = el >= array[i + 1];
    }

    return a && b;
  }

  function checkLessThen(el, i) {
    let a = true,
      b = true;

    if (array[i - 1]) {
      a = el >= array[i - 1];
    }

    if (array[i + 1]) {
      b = el <= array[i + 1];
    }

    return a && b;
  }

  return increase ? array.every(checkMoreThen) : array.every(checkLessThen);
}

console.log(
  isMonotonic1([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11])
); // true
