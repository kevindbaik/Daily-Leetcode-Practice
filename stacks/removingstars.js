// 2390. Removing Stars From a String
// Medium
// https://leetcode.com/problems/removing-stars-from-a-string/description/

//* You are given a string s, which contains stars *.
//* In one operation, you can: 1) Choose a star in s. and 2) Remove the closest non-star character to its left, as well as remove the star itself.
//* Return the string after all stars have been removed.

/**
 * * Example 1:
 * * Input: s = "leet**cod*e"
 * * Output: "lecoe"

* * Example 2:
* * Input: s = "erase*****"
* * Output: ""

*/

// my explanation
// this is a good scenario to use a stack
// we can undo (or remove from the top of the stack aka our most recent character) whenever we encounter a star "*".
// we need to first convert the string into an array however so that we can use push and pop

var removeStars = function(s) {
  const stack = [];
  for(let i = 0; i < s.length; i++) {
      if(s[i] === "*") {
          stack.pop()
      } else {
          stack.push(s[i])
      }
  }
  return stack.join("")
};
