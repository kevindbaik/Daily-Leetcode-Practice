// 525. Contiguous Array
// Medium
// https://leetcode.com/problems/contiguous-array/?envType=daily-question&envId=2024-03-19

//* Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

/**
 * * Example 1:
 * * Input: nums = [0,1]
 * * Output: 2

* * Example 2:
* * Input: nums = [0,1,0]
* * Output: 2

*/

//! my plan
// create a hash map to store the first occurence of each balance
  // the key is the balance, the value is the index where the index was first seen
// iterate through array and calculate running balance.
  // if the current element is 1, we can increment balance, if 0 we decrement
  // if we encounter a balance that's already in the map, it means we've found a subarray with an equal number of 0s and 1s from the first occurrence of this balance to the current index
  //  if it's the first time we've seen this balance, we store its index in the map.
// after iterating through the entire array, we return the maximum length found.

function findMaxLength(nums) {
  let map = new Map();
  map.set(0, -1);

  let maxLength = 0;
  let balance = 0;

  for (let i = 0; i < nums.length; i++) {

      balance += nums[i] === 1 ? 1 : -1;

      if (map.has(balance)) {

          maxLength = Math.max(maxLength, i - map.get(balance));
      } else {

          map.set(balance, i);
      }
  }

  return maxLength;
}
