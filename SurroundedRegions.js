/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function surroundedRegions(board) {
  const columns = board.length;
  const rows = board[0].length;

  for (let i = 0; i < rows; i++) {
    if (board[0][i] === 'O') {
      replaceChar('1', i, 0, board, 'O', columns, rows);
    }

    if (board[columns - 1][i] === 'O') {
      replaceChar('1', i, columns - 1, board, 'O', columns, rows);
    }
  }

  for (let i = 0; i < columns; i++) {
    if (board[i][0] === 'O') {
      replaceChar('1', 0, i, board, 'O', columns, rows);
    }

    if (board[i][rows - 1] === 'O') {
      replaceChar('1', rows - 1, i, board, 'O', columns, rows);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[j][i] === 'O')
        replaceChar('X', i, j, board, null, columns, rows);
      if (board[j][i] === '1')
        replaceChar('O', i, j, board, null, columns, rows);
    }
  }

  console.log(board);
}

function replaceChar(char, y, x, arr, srcChar, columns, rows, test) {
  arr[x][y] = char;

  if (!srcChar) return;

  if (x + 1 < columns && arr[x + 1][y] === srcChar)
    replaceChar(char, y, x + 1, arr, srcChar, columns, rows);
  if (x - 1 >= 0 && arr[x - 1][y] === srcChar)
    replaceChar(char, y, x - 1, arr, srcChar, columns, rows);
  if (y + 1 < rows && arr[x][y + 1] === srcChar)
    replaceChar(char, y + 1, x, arr, srcChar, columns, rows);
  if (y - 1 >= 0 && arr[x][y - 1] === srcChar)
    replaceChar(char, y - 1, x, arr, srcChar, columns, rows);
}

surroundedRegions([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
]);
// =>
//[
// ['X', 'X', 'X', 'X'],
// ['X', 'X', 'X', 'X'],
// ['X', 'X', 'X', 'X'],
// ['X', 'O', 'X', 'X'],
//];
