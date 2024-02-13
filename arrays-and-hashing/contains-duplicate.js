// 217. Contains Duplicate
// Easy
// https://leetcode.com/problems/contains-duplicate/description/

//* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * * Example 1:
 * * Input: nums = [1,2,3,1]
 * * Output: true

* * Example 2:
* * Input: nums = [1,2,3,4]
* * Output: false

* * Example 3:
* * Input: nums = [1,1,1,3,3,4,3,2,4,2]
* * Output: true
*/

const containsDuplicate = function(nums) {

  // Time complexity: O(n) because we will iterate over each element in the array once.
  // Space complexity: O(n) because the space used by the hashmap will grow based on each element in array.
  const hash = {};

  for(const num of nums) {
    if(hash[num]) return true;
    else hash[num] = 1;

    return false;
  }
}
