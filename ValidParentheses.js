/**
 *
 * input1 = '()[]{}'
 * output1 =  true
 *
 * input2 = '(]'
 * output2 =  false
 *
 */

// Solution
var isValid = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      arr.push(')');
    } else if (s[i] === '[') {
      arr.push(']');
    } else if (s[i] === '{') {
      arr.push('}');
    } else if (arr[arr.length - 1] !== s[i]) {
      return false;
    } else {
      arr.pop();
    }
  }

  return arr.length === 0;
};

isValid('()[]{}'); // true
isValid('(]'); // false
