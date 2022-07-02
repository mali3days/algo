// imput: 'ABCD'
// output: 'DCBA'

function reverseString(str) {
  let leftIdx = 0;
  let rightIdx = str.length - 1;
  const arr = Array.from(str);

  while (leftIdx < rightIdx / 2 + 1) {
    const temp = arr[leftIdx];

    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;

    leftIdx++;
    rightIdx--;
  }

  return arr.join('');
}

reverseString('ABCD'); // => 'DCBA'
