// 349. Intersection of Two Arrays
// Easy
// https://leetcode.com/problems/intersection-of-two-arrays/?envType=daily-question&envId=2024-03-11

//* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

/**
 * * Example 1:
 * * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * * Output: [2]

* * Example 2:
* * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
* * Output: [9,4]

*/

// my explanation
// two sets to remove duplicates
// compare sets and add intersecting elements into return array

var intersection = function(nums1, nums2) {
  const a = new Set(nums1);
  const b = new Set(nums2);
  const arr = [];

  for(const num of a) {
      if(b.has(num)) {
          arr.push(num)
      }
  }

  return arr;
};
