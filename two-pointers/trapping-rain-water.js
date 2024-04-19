// 42. Trapping Rain Water
// Hard
// https://leetcode.com/problems/trapping-rain-water/description/

//* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


/**
 * * Example 1:
 * * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * * Output: 6


* * Example 2:
* * Input: height = [4,2,0,3,2,5]
* * Output: 9

*/
function trap(height) {
  if (!height || height.length === 0) {
      return 0;
  }

  let left = 0, right = height.length - 1;
  let maxLeft = height[left], maxRight = height[right];
  let result = 0;

  while (left < right) {
      if (height[left] <= height[right]) {
          // move left pointer to the right
          left++;
          maxLeft = Math.max(maxLeft, height[left]);
          result += maxLeft - height[left];
      } else {
          // move right pointer to the left
          right--;
          maxRight = Math.max(maxRight, height[right]);
          result += maxRight - height[right];
      }
  }

  return result;
}

//! my explanation
// 1.  initialize l and r pointers at the two ends of the array.
//      - maxLeft and maxRight are initialized to the values at these pointers.
//      - result is initialized to 0 to accumulate the trapped water.
// 2. do normal while loop condition
// 3a. if height at L <= height at R
//    - move L to R,, update mLeft to be max of mLeft and change height to new L
//    - add mL - height at new L position to result
// 3b. else we move R to L, update mRight to maxx mRigh and height at new right, add mRight minus height at new R and point to result
// 4. return result
