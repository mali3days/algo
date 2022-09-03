// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  if (num.length === k) return '0';
  let result = [];

  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    const lastResult = result[result.length - 1];

    if (!lastResult) {
      result.push(number);
    } else if (number > lastResult) {
      result.push(number);
    } else if (number < lastResult && k > 0) {
      if (number === '0') {
        while (k > 0 && result.length > 0) {
          result.pop();
          k--;
        }
        result.push(number);
      } else {
        result.pop();
        result.push(number);
        k--;
      }
    } else {
      result.push(number);
    }
  }

  while (k > 0) {
    result.pop();
    k--;
  }

  while (result[0] === '0' && result.length > 1) {
    result.shift();
  }

  return result.join('');
}

removeKdigits('10001', 4); // => '0'
