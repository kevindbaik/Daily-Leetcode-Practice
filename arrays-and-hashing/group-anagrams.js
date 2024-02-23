// 49. Group Anagrams
// Medium
// https://leetcode.com/problems/group-anagrams/description/

//* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/**
 * * Example 1:
 * * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

* * Example 2:
* * Input: strs = [""]
* * Output: [[""]]

* * Example 3:
* * Input: strs = ["a"]
* * Output: [["a"]]

* * Constraints:
* * 1 <= strs.length <= 104
* * 0 <= strs[i].length <= 100
* * strs[i] consists of lowercase English letters.
*/

const groupAnagram = function(strs) {
  const hash = {};

  for(let i = 0; i < strs.length; i++) {
    const word = strs[i];
    // initialize a count array for 26 letters in the alphabet
    const count = new Array(26).fill(0);

    // count the frequency in each word
    for(let k = 0; k < word.length; k++) {
      const index = word.charCodeAt(k) - 'a'.charCodeAt(0);
      count[index]++;
    }

    const key = count.join('#');

    if(!hash[key]) {
      hash[key] = [word]
    } else {
      hash[key].push(word)
    }
  }

  return Object.values(hash);
}


const groupAnagrams2 = function(strs) {
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const count = {}; // Using an object instead of an array

    for (let k = 0; k < word.length; k++) {
      const char = word[k];
      if (!count[char]) count[char] = 0;
      count[char]++;
    }

    const key = Object.keys(count).sort().map(char => `${char}${count[char]}`).join('');
    if (!hash[key]) {
      hash[key] = [word];
    } else {
      hash[key].push(word);
    }
  }

  return Object.values(hash);
};


// attempt 3
var groupAnagrams = function(strs) {
  const hash = {};
  const ans = [];

  for(let i = 0; i < strs.length; i++) {
      const sort = strs[i].split("").sort().join("");
      if(!hash[sort]) {
          hash[sort] = [strs[i]];
      } else {
          hash[sort].push(strs[i]);
      }
  }

  for(const key in hash) {
      ans.push(hash[key])
  }

  return ans
};
