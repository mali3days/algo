/**
 *
 * input:
 * s = "leetcode",
 * wordDict = ["leet","code"]
 *
 * output = true
 *
 */

// Solution
// O(n*m*n) time
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j];
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
      }
      if (dp[i]) break;
    }
  }

  return dp[0];
};

wordBreak('leetcode', ['leet', 'code']); // true
wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']); // false
