function levenshteinDistance(str1, str2) {
  function getArray(l) {
    return [...Array(l + 1).keys()];
  }
  const edits = new Array(str2.length + 1).fill(0).reduce((acc, el) => {
    acc.push(getArray(str1.length));
    return acc;
  }, []);

  for (let i = 1; i <= str2.length; i++) {
    edits[i][0] = edits[i - 1][0] + 1;
  }

  for (let row = 1; row <= str2.length; row++) {
    for (let column = 1; column <= str1.length; column++) {
      if (str1[column - 1] === str2[row - 1]) {
        edits[row][column] = edits[row - 1][column - 1];
      } else {
        edits[row][column] = 1 + Math.min(edits[row - 1][column - 1], edits[row - 1][column], edits[row][column - 1]);
      }
    }
  }

  return edits[str2.length][str1.length];
}

console.log(levenshteinDistance('abc', 'yabd')); // 2

//   ''  a  b  c
//'' [0, 1, 2, 3],
// y [1, x, x, x],
// a [2, x, x, x],
// b [3, x, x, x]
// d [4, x, x, x]

