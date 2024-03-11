// 2540. Minimum Common Value
// Easy
// https://leetcode.com/problems/intersection-of-two-arrays/?envType=daily-question&envId=2024-03-11

//* Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
//* Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

/**
 * * Example 1:
 * * Input: nums1 = [1,2,3], nums2 = [2,4]
 * * Output: 2

* * Example 2:
* * Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
* * Output: 2

*/

// explanation
// method 1: use hash set
// use two sets to remove duplicates
// find common values, convert to array
// if converted array is empty, return -1
// else, find the minimum number and return

var getCommon = function(nums1, nums2) {
  const a = new Set(nums1);
  const b = new Set(nums2);

  const arr = new Set([...a].filter(x => b.has(x)));
  const res = Array.from(arr);

  if(res.length === 0) return -1
  const min = Math.min(...res);
  return min
};



// method 2: use two pointers
// since both arrays are sorted, this is better in terms of time and space complexity
// start two pointers, compare, if they are equal assign common to value
// if one is bigger, increase the index
// return whatever number is stored in common

var getCommon = function(nums1, nums2) {
  let common = Infinity;
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] === nums2[j]) {
          common = nums1[i];
          break;
      } else if (nums1[i] < nums2[j]) {
          i++;
      } else {
          j++;
      }
  }

  return common !== Infinity ? common : -1;
};
