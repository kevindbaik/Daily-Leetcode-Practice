// 41. First Missing Positive
// Hard
// https://leetcode.com/problems/first-missing-positive/description/?envType=daily-question&envId=2024-03-26

//* Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
//* You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

/**
 * * Example 1:
 * * Input: nums = [1,2,0]
 * * Output: 3

* * Example 2:
* * Input: nums = [3,4,-1,1]
* * Output: 2

*/

function firstMissingPositive(nums) {
  const n = nums.length;

  // 1st pass: normalize numbers.
  for (let i = 0; i < n; ++i) {
      if (nums[i] <= 0 || nums[i] > n) {
          nums[i] = 1;
      }
  }

  // 2nd pass: use the index as a hash key.
  for (let i = 0; i < n; ++i) {
      const val = Math.abs(nums[i]);
      if (val === n) {
          // handle case when `n` is in the array.
          nums[0] = -Math.abs(nums[0]);
      } else {
          nums[val] = -Math.abs(nums[val]);
      }
  }

  // 3rd pass: find the first cell which isn't negative (means missing).
  for (let i = 1; i < n; ++i) {
      if (nums[i] > 0) {
          return i;
      }
  }

  // if nums[0] > 0 then n is missing, otherwise, n + 1 is missing.
  return nums[0] > 0 ? n : n + 1;
}
