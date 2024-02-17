// 238. Product of Array Except Self
// Medium
// https://leetcode.com/problems/product-of-array-except-self/description/

//* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//* The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//* You must write an algorithm that runs in O(n) time and without using the division operation.
/**
 * * Example 1:
 * * Input: nums = [1,2,3,4]
 * * Output: [24,12,8,6]

* * Example 2:
* * Input: nums = [-1,1,0,-3,3]
* * Output: [0,0,9,0,0]

* * Constraints:
* * 1 <= nums.length <= 105
* * -30 <= nums[i] <= 30
* * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

function productExceptSelf(nums) {
  const output = [];
  const leftProducts = [];
  const rightProducts = [];
  let leftProduct = 1;
  let rightProduct = 1;

  // i calculate left products for each element
  for (let i = 0; i < nums.length; i++) {
      leftProducts[i] = leftProduct;
      leftProduct *= nums[i];
  }

  // i calculate right products for each element
  for (let i = nums.length - 1; i >= 0; i--) {
      rightProducts[i] = rightProduct;
      rightProduct *= nums[i];
  }

  // finally i calculate output by multiplying left and right products
  for (let i = 0; i < nums.length; i++) {
      output[i] = leftProducts[i] * rightProducts[i];
  }

  return output;
}
