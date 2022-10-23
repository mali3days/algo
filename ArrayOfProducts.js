// O(n^2) time
function arrayOfProducts1(array) {
  const result = [];
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let n = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        n = array[j] * n;
      }
    }
    result.push(n);
  }

  return result;
}

console.log(arrayOfProducts1([5, 1, 4, 2])); // [8, 40, 10, 20]
