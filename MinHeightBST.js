/**
 *
 * input = [1, 2, 5, 7, 10, 13, 14, 15, 22]
 *
 * output =  10
 *         /    \
 *        2      14
 *      /  \    /  \
 *     1    5  13   15
 *           \        \
 *            7        22
 *
 */

// Solution
// O(n) time | O(n) space
function calcMinHeightBST(array, min, max) {
  if (max < min) return null;

  const mid = Math.floor((min + max) / 2);
  const bst = new BST(array[mid]);

  bst.left = calcMinHeightBST(array, min, mid - 1);
  bst.right = calcMinHeightBST(array, mid + 1, max);

  return bst;
}

function minHeightBst(array) {
  return calcMinHeightBST(array, 0, array.length - 1);
}
