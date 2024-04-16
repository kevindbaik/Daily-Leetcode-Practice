// 287. Find the Duplicate Number
// Medium
// https://leetcode.com/problems/find-the-duplicate-number/description/

//* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
//* There is only one repeated number in nums, return this repeated number.
//*_You must solve the problem without modifying the array nums and uses only constant extra space.

/**
 * * Example 1:
 * * Input: nums = [1,3,4,2,2]
 * * Output: 2

* * Example 2:
* * Input: [3,3,3,3,3]
* * Output: 3

*/

function findDuplicate(nums) {
  // part1: i find the intersection point of the two runners.
  let tortoise = nums[0];
  let hare = nums[0];

  do {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
  } while (tortoise !== hare);

  // part2: i find the "entrance" to the cycle, which is the duplicate element.
  tortoise = nums[0];
  while (tortoise !== hare) {
      tortoise = nums[tortoise];
      hare = nums[hare];
  }

  return hare;
}
