// 2. Add Two Numbers
// Medium
// https://leetcode.com/problems/add-two-numbers/description/

//* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//* You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * * Example 1:
 * * Input: l1 = [2,4,3], l2 = [5,6,4]
 * * Output: [7,0,8]


* * Example 2:
* * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
* * Output: [8,9,9,9,0,0,0,1]

*/

//! my explanation
// initialize a new dummy head for the result list
  // this dummy head will help handle edge cases smoothly and allows us to easily return the result list.
// initialize variables for carrying the digit (carry) and current nodes in each list
  // "carry" variable will handle cases where the sum of two digits + any carry from the previous digit is 10 or more.
// iterate through both lists simultaneously, adding corresponding digits
  // IF one list is longer, continue with the longer list. Add the carry from the previous operation to the current sum.
// handle carry for the last digits
  // IF there's a carry after the last digits have been added, create a new node with the carry value.
// return res list

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
      let x = (l1 != null) ? l1.val : 0;
      let y = (l2 != null) ? l2.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
  }

  if (carry > 0) {
      current.next = new ListNode(carry);
  }

  return dummyHead.next;
};
