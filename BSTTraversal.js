/**
 *
 * input =  10
 *         /  \
 *        5    15
 *      /   \    \
 *     2     5    22
 *    /
 *   1
 *
 * array = []
 *
 * output:
 * inOrderTraverse: [1,2,5,5,10,15,22]
 * preOrderTraverse: [10,5,2,1,5,15,22]
 * postOrderTraverse: [1,2,5,5,22,15,10]
 *
 */

// Solution
function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }

  return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }

  return array;
}

function postOrderTraverse(tree, array) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }

  return array;
}
