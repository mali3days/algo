/**
 *
 * input =
 * 'abcdcaf'
 *
 * output = 1
 *
 */

// Solution
function firstNonRepeatingCharacter(string) {
	for (let i = 0; i < string.length; i++) {
		if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
			return i;
		}
	}

  return -1;
}

isPalindrome('abcdcaf'); // 1
