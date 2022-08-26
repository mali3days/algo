/**
 *
 * input:
 * [
 *  [1, 3, 1],
 *  [1, 5, 1],
 *  [4, 2, 1]
 * ]
 *
 * output = 7 //  1 + 3 + 1 + 1 + 1
 *
 */

// Solution 1
// O(n*m) time | O(n*m) space
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minimumPathSum(grid) {
  const res = grid.slice();

  const rows = grid.length;
  const columns = grid[0].length;

  for (let i = 1; i < columns; i++) {
    res[0][i] = res[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < rows; i++) {
    res[i][0] = res[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      res[i][j] = res[i][j] + Math.min(res[i - 1][j], res[i][j - 1]);
    }
  }

  return res[rows - 1][columns - 1];
}

minPathSum([[1,3,1],[1,5,1],[4,2,1]]); // => 7