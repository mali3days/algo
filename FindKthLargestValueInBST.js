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
 * output: 10
 *
 */

// Solution
// O(h + k) time | O(h) - space
function findKthLargestValueInBst(tree, k) {
  const info = {
    numberOfNodesVisited: 0,
    latestVisitedNodeValue: -1,
  };
  reverseInOrderTraverse(tree, k, info);
  return info.latestVisitedNodeValue;
}

function reverseInOrderTraverse(tree, k, info) {
  if (tree === null || info.numberOfNodesVisited >= k) return;

  reverseInOrderTraverse(tree.right, k, info);

  if (info.numberOfNodesVisited < k) {
    info.numberOfNodesVisited += 1;
    info.latestVisitedNodeValue = tree.value;
    reverseInOrderTraverse(tree.left, k, info);
  }
}
