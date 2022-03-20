/**
 *
 * inputs:
 * characters = "aheaollabbhb",
 * document = "hello"
 *
 * output = true // You can generate document from given characters
 *
 */

// Solution 1
function generateDocument(characters, document) {
	const charactersArray = characters.split('');
	return document.split('').every((w) => {
		const indexOfW = charactersArray.indexOf(w);
		if (indexOfW > -1) {
			charactersArray.splice(indexOfW, 1);
			return true;
		}
		return false;
	});
}

// Solution 2
function generateDocument2(characters, document) {
	const charCount = {};
	
	for (let char of characters) {
		if (char in charCount) {
			charCount[char] += 1;
		} else {
			charCount[char] = 1;
		}
	}
	
	for (let char of document) {
		if (charCount[char] && charCount[char] >= 0) {
			charCount[char] -= 1;
		} else {
			return false
		}
	}

	return true
}

generateDocument("aheaollabbhb", "hello"); // 3
generateDocument2("aheaollabbhb", "hello"); // 3
