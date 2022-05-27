/**
 *
 * input =
 * 'abcdcba'
 *
 * output = true
 *
 */

// Solution 1
// O(n) time | O(1) space
function isPalindrome1(string) {
  let l = 0;
  let r = string.length - 1;
  while (l < r) {
    if (string[l] !== string[r]) return false;
    l += 1;
    r -= 1;
  }
  return true;
}

// Solution 2
// O(n) time | O(1) space
function isPalindrome2(string) {
  for (let i in string) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }

  return true;
}

isPalindrome1('abcdcba'); // true
isPalindrome2('abcdcba'); // true
