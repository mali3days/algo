/**
 *
 * input =
 * 'abcdcaf'
 *
 * output = 1
 *
 */

// Solution 1
function firstNonRepeatingCharacter(string) {
	for (let i = 0; i < string.length; i++) {
		if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
			return i;
		}
	}

  return -1;
}

// Solution 2
function firstNonRepeatingCharacter(string) {
	let firstNonRepeatingChar = -1;
	
	for (let i = 0; i < string.length; i++) {
			for (let j = 0; j < string.length; j++) {
				if (i !== j && string[i] === string[j]) {
					firstNonRepeatingChar = -1;
					break;
				} else {
					firstNonRepeatingChar = i;
				}
			}
		
		  if (firstNonRepeatingChar > -1) {
				return firstNonRepeatingChar;
			}
	}

  return firstNonRepeatingChar;
}


firstNonRepeatingCharacter('abcdcaf'); // 1
