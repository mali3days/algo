/**
 *
 * input = [[1,2,3],[4,5,6],[7,8,9]]
 *
 * output = [[7,4,1],[8,5,2],[9,6,3]]
 *
 */

// Solution 1
function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      const temp = matrix[i][j];

      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      const temp = matrix[i][j];

      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // [[7,4,1],[8,5,2],[9,6,3]]
