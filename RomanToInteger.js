/**
 *
 * input: MCMXCIV
 *
 * output = 1994
 *
 * explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

// Solution 1
const SYMBOLS = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let result = 0;

  for (let index = 0; index < s.length; index++) {
    let symbol = s[index];
    let nextSymbol = s[+index + 1];
    let nextComplicatedSymbol = SYMBOLS[symbol + nextSymbol];

    if (nextComplicatedSymbol) {
      result += nextComplicatedSymbol;
      index++;
    } else {
      result += SYMBOLS[symbol];
    }
  }

  return result;
}

romanToInt('MCMXCIV'); // 1994
