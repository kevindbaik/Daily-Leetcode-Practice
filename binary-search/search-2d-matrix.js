// 74. Search a 2D Matrix
// Medium
// https://leetcode.com/problems/search-a-2d-matrix/description/

//* You are given an m x n integer matrix matrix with the following two properties:
    //* Each row is sorted in non-decreasing order.
    //* The first integer of each row is greater than the last integer of the previous row.
//* Given an integer target, return true if target is in matrix or false otherwise.
//* You must write a solution in O(log(m * n)) time complexity.

/**
 * * Example 1:
 * * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * * Output: true

* * Example 2:
* * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
* * Output: false

*/

var searchMatrix = function(matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;

  while (top <= bottom) {
      let row = Math.floor((top + bottom) / 2);
      if (matrix[row][0] > target) {
          bottom = row - 1;
      } else if (target > matrix[row][matrix[row].length - 1]) {
          top = row + 1;
      } else {
          let left = 0;
          let right = matrix[row].length - 1;

          while (left <= right) {
              let mid = Math.floor((left + right) / 2);

              if (matrix[row][mid] === target) {
                  return true;
              } else if (matrix[row][mid] < target) {
                  left = mid + 1;
              } else {
                  right = mid - 1;
              }
          }

          return false;
      }
  }

  return false;
};
