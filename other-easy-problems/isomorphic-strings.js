// 205. Isomorphic Strings
// Easy
// https://leetcode.com/problems/isomorphic-strings/description/?envType=daily-question&envId=2024-04-02

//* Given two strings s and t, determine if they are isomorphic
//* Two strings s and t are isomorphic if the characters in s can be replaced to get t
//* All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


/**
 * * Example 1:
 * * Input: s = "egg", t = "add"
 * * Output: true

* * Example 2:
* * Input: s = "foo", t = "bar"
* * Output: false

*/

//! my explanation
// use two maps to track characters mapping from first str to second, vice versa
// loop through each character in both strings at same time, if a mapping exists check if it matches current char in other string (i)
// if map doesnt exist, add to map
//! the specific index of the characters is NOT important!!! we just need to ensure a consistent one - one mapping between characters of their two strings (isomorphism)
//! why cant we use a single map? why do we need two? using TWO maps for each string ensures one to one mapping.

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if ((mapST[sChar] && mapST[sChar] !== tChar) || (mapTS[tChar] && mapTS[tChar] !== sChar)) {
      return false;
    }

    mapST[sChar] = tChar;
    mapTS[tChar] = sChar;
  }

  return true;
}
