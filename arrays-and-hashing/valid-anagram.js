// 242. Valid Anagram
// Easy
// https://leetcode.com/problems/valid-anagram/description/

//* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/**
 * * Example 1:
 * * Input: s = "anagram", t = "nagaram"
 * * Output: true

* * Example 2:
* * Input: s = "rat", t = "car"
* * Output: false

* * Constraints:
* * 1 <= s.length, t.length <= 5 * 104
* * s and t consist of lowercase English letters.
*/

// Method 1: Use on hash map
// TC: O(n)
// SC: O(n)
const validAnagram = function(s,t) {
  if(s.length !== t.length) return false;

  const hash = {};
  for(const e of s) {
    if(hash[e]) hash[e]++;
    else hash[e] = 1;
  }

  for(const e of t) {
    if(!hash[e]) return false;
    hash[e]--;
    if(hash[e] === 0) delete hash[e];
  }

  return Object.keys(hash).length === 0;
}

// Method 2: Use two hash maps
// TC: O(n)
// SC: O(n)
const validAnagram2 = function(s, t) {
  if(s.length !== t.length) return false;

  const hash1 = {};
  const hash2 = {};

  for(const e of s) {
    if(hash1[e]) hash1[e]++;
    else hash1[e] = 1;
  }

  for(const e of t) {
    if(hash2[e]) hash2[e]++;
    else hash2[e] = 1;
  }

  for(const key in hash1) {
    if(!hash2[key] || hash1[key] !== hash2[key]) {
      return false;
    }
  }

  return true;
}

// Method 3: Using sort
// TC: O(n log n) based on most a sorting algo
// SC: O(n) but depends on sorting algo

const validAnagramSort = function(s, t) {
  if(s.length !== t.length) return false;

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}
