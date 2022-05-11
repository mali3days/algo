/**
 *
 * input =  [8,5,2,9,5,6,3]
 *
 * output = [2,3,5,5,6,8,9]
 *
 */

// Solution 1
// 0(n^2) time | O(1) space
function selectionSort(array) {
	function replaceSmallest(from, array) {
		let smallestIndex = from;
		for (let i = from; i < array.length; i++) {
			if (array[i] < array[smallestIndex]) {
				smallestIndex = i;
			}
		}
	
		const temp = array[from];
		array[from] = array[smallestIndex];
		array[smallestIndex] = temp;
	}
	
	for (let i = 0; i < array.length - 1; i++) {
		replaceSmallest(i, array);
	}

	return array;	
}

selectionSort([8, 5, 2, 9, 5, 6, 3]); // [2,3,5,5,6,8,9]
