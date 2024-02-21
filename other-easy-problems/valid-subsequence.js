// Validate Subsequence
// Easy
// https://www.algoexpert.io/questions/validate-subsequence

//* Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of first one.
/**
 * * Example 1:
 * * Input: array = [5, 1, 22, 25, 6, -1, 8, 10], sequence = [1, 6, -1, 10]
 * * Output: true
 *
*/


function isValidSubsequence(array, sequence) {
  let j = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === sequence[j]) j++;
    if(j === sequence.length) break;
  }
  return j === sequence.length
}
