// 20. Valid Parentheses
// Medium
// https://leetcode.com/problems/valid-parentheses/description/

//* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//* An input string is valid if:
//* 1. Open brackets must be closed by the same type of brackets.
//* 2. Open brackets must be closed in the correct order.
//* 3. Every close bracket has a corresponding open bracket of the same type.
/**
 * * Example 1:
 * * Input: s = "()"
 * * Output: true

* * Example 2:
* * Input: s = "()[]{}"
* * Output: true

*/


//! ATTEMPT 1
// input is a string
// output is a boolean

 // use a hash map to store each type of closing and opening bracket
 // use a stack to store an opening bracket
 var isValid = function(s) {
  let stack = [];
  const hash = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
  }

  for(let i = 0; i < s.length; i++) {
    const c = s[i];
    if(hash[c]) {
        stack.push(c);
    } else {
        const open = stack.pop();
        if(hash[open] !== c) return false
    }
  }

  return stack.length === 0
};
