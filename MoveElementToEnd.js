function moveElementToEnd1(array, toMove) {
  function moveNToEnd(a, b) {
    if (toMove === a) return 1;
    if (toMove === b) return -1;
  }

  array.sort(moveNToEnd);

  return array;
}

function swap(fromIdx, toIdx, array) {
  [array[fromIdx], array[toIdx]] = [array[toIdx], array[fromIdx]];
}

function moveElementToEnd2(array, toMove) {
  let fromIdx = 0;
  let toIdx = array.length - 1;

  while (fromIdx < toIdx) {
    while (array[toIdx] === toMove) {
      toIdx--;
    }

    while (array[fromIdx] !== toMove) {
      fromIdx++;
    }

    if (fromIdx >= toIdx) break;

    swap(fromIdx, toIdx, array);

    fromIdx++;
    toIdx--;
  }

  return array;
}

function moveElementToEnd3(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }

  return array;
}

console.log(moveElementToEnd1([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log(moveElementToEnd2([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log(moveElementToEnd3([2, 1, 2, 2, 2, 3, 4, 2], 2));
