/**
 *
 * input =
 * [10,5,9,10,12,3]
 *
 * output = [10,10,12]
 *
 */

// Solution 1
function findThreeLargestNumbers(array) {
	let n1 = null;
	let n2 = null;
	let n3 = null;
	
	array.forEach((n) => {
		if (n3 === null || n > n3) {
			n1 = n2;
			n2 = n3;
			n3 = n;
		} else if (n2 === null || n > n2) {
			n1 = n2;
			n2 = n;
		} else if (n1 === null || n > n1) {
			n1 = n;
		}
	});
	
	return [n1, n2, n3];
}

findThreeLargestNumbers([10,5,9,10,12,3]); // [10,10,12]
