/**
 *
 * input
 * redShirtSpeeds = [5,5,3,9,2]
 * blueShirtSpeeds = [3,6,7,2,1]
 *
 * output = 32
 *
 */

// Solution 1
// 0(nlog(n)) time | O(1) space
function sortN(a, b) {
  return a - b;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort(sortN);
  blueShirtSpeeds.sort(sortN);

  let totalSpeed = 0;
  if (fastest) {
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      const reverseIdx = redShirtSpeeds.length - 1 - i;

      totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[reverseIdx]);
    }
  } else {
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  }

  return totalSpeed;
}

tandemBicycle([5,5,3,9,2], [3,6,7,2,1], true); // => 32
