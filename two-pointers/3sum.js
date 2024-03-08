// 167. 3Sum
// Medium
// https://leetcode.com/problems/3sum/description/

//* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//* Notice that the solution set must not contain duplicate triplets.

/**
 * * Example 1:
 * * Input: nums = [-1,0,1,2,-1,-4]
 * * Output: [[-1,-1,2],[-1,0,1]]

* * Example 2:
* * Input: nums = [0,1,1]
* * Output: []

* * Example 3:
* * Input: nums = [0,0,0]
* * Output: [[0,0,0]]
*/

var threeSum = function(nums) {
  const sorted = nums.sort((a,b) => a-b)
  const arr = [];

  let i = 0;
  while (i < sorted.length) {
      if(i > 0 && sorted[i - 1] === sorted[i]) {
          i++;
          continue;
      }

      const first = sorted[i];
      const target = 0 - sorted[i];
      let left = i + 1;
      let right = sorted.length - 1;

      while(left < right) {
          if(sorted[left] + sorted[right] === target) {
              const triplet = [first, sorted[left], sorted[right]]
              arr.push(triplet)
              // check for duplicated
              while(left < right && sorted[left] === sorted[left + 1]) left++
              while(left < right && sorted[right] === sorted[right - 1]) right--
              // dont forget this
              left++
              right--
          } else if(sorted[left] + sorted[right] < target) left++
          else if (sorted[left] + sorted[right] > target) right--
      }

      i++
  }

  return arr
};
