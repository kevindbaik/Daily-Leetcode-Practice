// 58. Length of Last Word
// Easy
// https://leetcode.com/problems/length-of-last-word/?envType=daily-question&envId=2024-04-02

//* Given a string s consisting of words and spaces, return the length of the last word in the string.
//* A word is a maximal  substring consisting of non-space characters only.


/**
 * * Example 1:
 * * Input: s = "Hello World"
 * * Output: 5

* * Example 2:
* * Input: s = "   fly me   to   the moon  "
* * Output: 4

*/

//! my explanation
// trim to remove white space
// turn str into arr
// get last index, return length of it

function lengthOfLastWord(s) {
  s = s.trim();

  const words = s.split(' ');

  return words[words.length - 1].length;
}
