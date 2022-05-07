/**
 *
 * inputs:
 * [3,2,1,2,6]
 *
 * output = 17 // [3,2,1,2,6] => [1,2,2,3,6] => 1+3+5+8=17
 *
 */

// Solution 1
function sortN(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function minimumWaitingTime(queries) {
  return queries.sort(sortN).reduce((acc, n, index) => {
    if (index === queries.length - 1) return acc;

    acc = acc + n * (queries.length - (index + 1));

    return acc;
  }, 0);
}

minimumWaitingTime([3, 2, 1, 2, 6]); // 17
