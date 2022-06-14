/**
 *
 * input =  1
 *         /  \
 *        2    3
 *       /  \   \
 *      4    5   6
 *          / \
 *         7   8
 *
 * output: true
 *
 */

// Solution
// O(n) time | O(h) - space
function heightBalancedBinaryTree(tree) {
  // Write your code here.
  return calcHeightBalance(tree).isBalanced;
}

function calcHeightBalance(tree) {
  if (tree === null) return new NodeInfo(true, -1);

  const leftBalance = calcHeightBalance(tree.left);
  const rightBalance = calcHeightBalance(tree.right);

  const isBalanced =
    leftBalance.isBalanced &&
    rightBalance.isBalanced &&
    Math.abs(rightBalance.height - leftBalance.height) <= 1;
  const height = Math.max(leftBalance.height, rightBalance.height) + 1;

  return new NodeInfo(isBalanced, height);
}

class NodeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}
