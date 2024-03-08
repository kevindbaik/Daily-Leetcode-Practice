// 167. Two Sum II
// Medium
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

//* Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
//* Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
//* Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2

/**
 * * Example 1:
 * * Input: numbers = [2,7,11,15], target = 9
 * * Output: [1,2]

* * Example 2:
* * Input: numbers = [2,3,4], target = 6
* * Output: [1,3]

*/


// my explanation
// input a sorted array of numbers (numbers) and a number representing a target sum
// output will be a array of two numbers that represent the indices of the target + 1

// since our array is sorted, and we're looking for pairs, we can use two pointer
// start the left pointer at 0
// start the right pointer at left + 1
// check if numbers[l] + numbers[r] === target
// if it does, add indices to return array + 1
// if it doesn't keep move right pointer until it equals length of numbers
// move left pointer and go again

var twoSum = function(numbers, target) {
  let arr = [];
  let left = 0;
  let right = numbers.length - 1;

  while(left < right) {
      if(numbers[left] + numbers[right] === target) {
          return [left + 1, right +1]
      }

      if(numbers[left] + numbers[right] < target) {
          left++
      }

       if(numbers[left] + numbers[right] > target) {
          right--
      }
  }

  return arr
};
