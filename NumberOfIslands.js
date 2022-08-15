/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const height = grid.length;
  const width = grid[0].length;
  let islandCount = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === '1') {
        markIslandPart(grid, y, x, height, width);
        islandCount += 1;
      }
    }
  }

  return islandCount;
};

function markIslandPart(grid, x, y, height, width) {
  if (x < 0 || x >= height || y < 0 || y >= width || grid[x][y] !== '1') {
    return;
  }

  grid[x][y] = '2';

  markIslandPart(grid, x + 1, y, height, width);
  markIslandPart(grid, x, y + 1, height, width);
  markIslandPart(grid, x - 1, y, height, width);
  markIslandPart(grid, x, y - 1, height, width);
}
