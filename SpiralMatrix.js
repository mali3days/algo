const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let direction = 0;
  const result = [];

  while (left <= right && top <= bottom) {
    if (direction === 0) {
      // left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
    } else if (direction === 1) {
      // top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
    } else if (direction === 2) {
      // right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    } else if (direction === 3) {
      // bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }

    direction++;
    direction = direction % 4;
  }

  return result;
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder2 = function (matrix) {
  const DIRECTIONS = {
    left_to_right: 0,
    top_to_bottom: 1,
    right_to_left: 2,
    bottom_to_top: 3,
  };

  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;

  let direction = DIRECTIONS.left_to_right;

  let result = [];

  while (result.length < m * n) {
    if (direction === DIRECTIONS.left_to_right) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      direction = DIRECTIONS.top_to_bottom;
      top++;
    } else if (direction === DIRECTIONS.top_to_bottom) {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      direction = DIRECTIONS.right_to_left;
      right--;
    } else if (direction === DIRECTIONS.right_to_left) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      direction = DIRECTIONS.bottom_to_top;
      bottom--;
    } else if (direction === DIRECTIONS.bottom_to_top) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      direction = DIRECTIONS.left_to_right;
      left++;
    }
  }

  return result;
};

console.log(spiralOrder(matrix)); // => [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
console.log(spiralOrder2(matrix)); // => [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
