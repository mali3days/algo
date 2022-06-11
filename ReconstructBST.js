/**
 *
 * input:
 * preOrderTraverse: [10,4,2,1,5,17,19,18]
 * 
 * output = 10
 *         /  \
 *        4    17
 *      /   \    \
 *     2     5    19
 *    /          /
 *   1         18
 *
 * array = []
 *
 * output:
 
 *
 */

// Solution
// O(n) time | O(h) space
function reconstructBst(preOrderTraversalValues) {
  treeInfo = new TreeInfo(0);

  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubTreeInfo
) {
  if (currentSubTreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  const rootValue = preOrderTraversalValues[currentSubTreeInfo.rootIdx];

  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubTreeInfo.rootIdx += 1;

  const leftSubTree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubTreeInfo
  );
  const rightSubTree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubTreeInfo
  );

  return new BST(rootValue, leftSubTree, rightSubTree);
}
