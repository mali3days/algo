/**
 *
 * input =
 * redShirtHeights = [5, 8, 1, 3, 4]
 * blueShirtHeights = [6, 9, 2, 4, 5]
 *
 * output =
 * true // Place all students with blue shirts in the back row.
 *
 */

// Solution
function classPhotos(redShirtHeights, blueShirtHeights) {
	const sortedRedShirtHeight = redShirtHeights.sort((a, b) => a - b);
	const sortedBlueShirtHeight = blueShirtHeights.sort((a, b) => a - b);
	const redGtThenBlue = sortedRedShirtHeight[0] > sortedBlueShirtHeight[0];
	return sortedBlueShirtHeight.every((el, i) => {
		if (redGtThenBlue) {
			return el < sortedRedShirtHeight[i];
		} else {
			return el > sortedRedShirtHeight[i];
		}
	});
}

const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 5];
classPhotos(redShirtHeights, blueShirtHeights); // true