/**
 *
 * input =
 * string = "xyz"
 * key = 2
 *
 * output = "zab"
 *
 */

// Solution
function caesarCipherEncryptor(string, key) {
  let result = '';
  const aCode = 97;
  const zCode = 122 + 1;

  for (let i = 0; i < string.length; i++) {
    const newKey = string.charCodeAt(i) + key;
    if (newKey < zCode) {
      result += String.fromCodePoint(newKey);
    } else {
      let newKey2 = (newKey % zCode) + aCode;
      if (newKey2 > zCode - 1) {
        newKey2 = (newKey2 % zCode) + aCode;
      }
      result += String.fromCodePoint(newKey2);
    }
  }
  return result;
}

caesarCipherEncryptor('xyz', 2); // "zab"
