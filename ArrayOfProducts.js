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

function arrayOfProducts2(array) {
  let result = new Array(array.length).fill(1);
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    result[i] = product;
    product = product * array[i];
  }

  product = 1;

  for (let i = array.length - 1; i >= 0; i--) {
    result[i] = product * result[i];
    product = product * array[i];
  }

  return result;
}

console.log(arrayOfProducts1([5, 1, 4, 2])); // [8, 40, 10, 20]
console.log(arrayOfProducts2([5, 1, 4, 2])); // [8, 40, 10, 20]
