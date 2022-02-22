/**
 *
 * input =
 * 'abcdcba'
 *
 * output = true
 *
 */

// Solution
function isPalindrome(string) {
  let l = 0;
  let r = string.length - 1;
  while (l < r) {
    if (string[l] !== string[r]) return false;
    l += 1;
    r -= 1;
  }
  return true;
}

isPalindrome('abcdcba'); // true
