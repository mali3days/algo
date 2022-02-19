/**
 *
 * input =      1(0)
 *          /          \
 *        2(1)         3(1)
 *      /     \       /    \
 *     4(2)   5(2)  6(2)  7(2)
 *    /   \
 * 8(3)    9(3)
 *
 * 16
 * // The depth of the node with value 1 is 0.
 * // The depth of the node with value 2 is 1.
 * // The depth of the node with value 3 is 1.
 * // The depth of the node with value 4 is 2.
 * // The depth of the node with value 5 is 2.
 * // Etc..
 * => 0 + 1 + 1 + 2 + 2 + 2 + 2 + 3 + 3 = 16
 *
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTreeNode(1);

root.left = new BinaryTreeNode(2);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);
root.left.left.left = new BinaryTreeNode(8);
root.left.left.right = new BinaryTreeNode(9);

root.right = new BinaryTreeNode(3);
root.right.left = new BinaryTreeNode(6);
root.right.right = new BinaryTreeNode(7);

// Solution
function nodeDepths(node, depth = 0, sum = 0) {
  if (!node) return 0;

  return (
    depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1)
  );
}

nodeDepths(root); // => 16
