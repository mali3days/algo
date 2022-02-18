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
 * output = [15, 16, 18, 10, 11]
 * // 15 == 1 + 2 + 4 + 8
 * // 16 == 1 + 2 + 4 + 9
 * // 18 == 1 + 2 + 5 + 10
 * // 10 == 1 + 3 + 6
 * // 11 == 1 + 3 + 7
 *
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree extends BinaryTreeNode {
  constructor(value) {
    super(value);
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

// Solution
function getBranchSums(node, activeSum = 0, sums = []) {
  if (!node) return;

  const newSum = activeSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newSum);
  } else {
    getBranchSums(node.left, newSum, sums);
    getBranchSums(node.right, newSum, sums);
  }

  return sums;
}

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
getBranchSums(tree); // => [15, 16, 18, 10, 11]