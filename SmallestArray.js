// O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  const sortFn = (a, b) => a - b;
  arrayOne.sort(sortFn);
  arrayTwo.sort(sortFn);

  let leftPointer = 0;
  let rightPointer = 0;
  let current = Infinity;
  let smallestDiff = Infinity;
  let smallestPair = [];

  while (leftPointer < arrayOne.length && rightPointer < arrayTwo.length) {
    let leftN = arrayOne[leftPointer];
    let rightN = arrayTwo[rightPointer];

    if (leftN < rightN) {
      current = rightN - leftN;
      leftPointer++;
    } else if (rightN < leftN) {
      current = leftN - rightN;
      rightPointer++;
    } else {
      return [leftN, rightN];
    }

    if (smallestDiff > current) {
      smallestDiff = current;
      smallestPair = [leftN, rightN];
    }
  }

  return smallestPair;
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 15, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo)); // => [28, 26]
