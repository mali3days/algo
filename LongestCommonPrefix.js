/**
 *
 * input = ["flower","flow","flight"]
 *
 * output = "fl"
 *
 */

// Solution 1
var longestCommonPrefix1 = function (strs, index = 0, prefix = '') {
  let buffer = strs[0][index];

  if (!buffer) return strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (buffer !== strs[i][index]) {
      return prefix;
    }
  }

  return longestCommonPrefix1(strs, index + 1, prefix + buffer);
};

// Solution 2
var longestCommonPrefix2 = function (strs) {
  let i = 0;
  while (i < strs[0].length) {
    for (let s = 1; s < strs.length; s++) {
      if (strs[0][i] !== strs[s][i]) {
        return strs[0].slice(0, i);
      }
    }
    i++;
  }
  return strs[0];
};

longestCommonPrefix1(['flower', 'flow', 'flight']); // "fl"
longestCommonPrefix2(['flower', 'flow', 'flight']); // "fl"
