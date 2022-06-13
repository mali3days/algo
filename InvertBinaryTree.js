/**
 *
 * input =   1
 *        /     \
 *       2       3
 *     /   \    /  \
 *    4     5  6    7
 *  /   \  /
 * 8    9 10
 *
 * output =   1
 *        /     \
 *       3        2
 *     /   \    /   \
 *    7     6  5      4
 *              \    /  \
 *               10 9    8
 *
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution 1
// O(n) time | O(n) space
function invertBinaryTree1(tree) {
  const queue = [tree];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr === null) continue;

    swapLeftAndRight(curr);

    queue.push(curr.left);
    queue.push(curr.right);
  }
}

// O(n) time | O(d) space
function invertBinaryTree(tree) {
  if (tree === null) return;

  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapLeftAndRight(node) {
  const buff = node.right;
  node.right = node.left;
  node.left = buff;
}
