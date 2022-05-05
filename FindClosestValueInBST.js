/**
 *
 * input =   10
 *         /    \
 *        5      15
 *      /  \    /  \
 *     2    5  13   22
 *    /         \
 *   1           14
 *
 * target = 12
 *
 * output = 13
 *
 */

const tree = {
  left: {
    left: {
      left: {
        left: null,
        right: null,
        value: 1,
      },
      right: null,
      value: 2,
    },
    right: {
      left: null,
      right: null,
      value: 5,
    },
    value: 5,
  },
  right: {
    left: {
      left: null,
      right: {
        left: null,
        right: null,
        value: 14,
      },
      value: 13,
    },
    right: {
      left: null,
      right: null,
      value: 22,
    },
    value: 15,
  },
  value: 10,
};


// Solution
// Average: O(log(n)) time | O(log(n)) space
// Worst:   O(n)      time | O(n)      space
function findClosestValueInBst(tree, target, closest = Infinity) {
	if (tree === null) return closest;

	if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
		closest = tree.value;
	}

	if (target < tree.value) {
		return findClosestValueInBst(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestValueInBst(tree.right, target, closest);
	} else {
		return closest;
	}
}

findClosestValueInBst(tree); // => 13
