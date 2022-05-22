/**
 *
 * input =
 * 'AAAAAAAAAAAAABBCCCCDD'
 *
 * output = '9A4A2B4C2D'
 *
 */

// Solution 1
// O(n) time | O(n) space - where n is length of the input string
function runLengthEncoding(string) {
  let resultStr = '';
  let count = 1;
  let word = string[0];

  for (let i = 1; i < string.length; i++) {
    if (count === 9) {
      resultStr += `9${string[i - 1]}`;
      count = 0;
    }
    if (count === 0 || string[i] === word) {
      count++;
    } else {
      resultStr += `${count}${word}`;
      count = 1;
    }
    word = string[i];
  }

  resultStr += `${count}${word}`;

  return resultStr;
}

runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'); // '9A4A2B4C2D'
