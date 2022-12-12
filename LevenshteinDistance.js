
function levenshteinDistance(str1, str2) {
    function getArray(l) {
        return [...Array(l).keys()];
    }
    const edits = new Array(str2.length).fill(0).reduce((acc, el) => {
        acc.push(getArray(str1.length));
        return acc;
    }, []);

    for (let i = 1; i < str2.length; i++) {
      edits[i][0] = edits[i - 1][0] + 1;
    }
  
    return edits;
  }

  console.log(levenshteinDistance('abc', 'yabd')); // 2
