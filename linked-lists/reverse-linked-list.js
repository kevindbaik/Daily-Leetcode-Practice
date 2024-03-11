// 206. Reverse Linked List
// Easy
// https://leetcode.com/problems/reverse-linked-list/

//* Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * * Example 1:
 * * Input: head = [1,2,3,4,5]
 * * Output: [5,4,3,2,1]

* * Example 2:
* * Input: head = [1,2]
* * Output: [2,1]

*/

//! my explanation
//! we need to keep track of previous, current, and next
//! our goal is to "switch" the current next to previous, and then change previous to current AND current to next
//! by the end, the LL will be "reversed" meaning the previous will be the new head

// Definition for singly-linked list.
// function ListNode(val, next) {
//    this.val = (val===undefined ? 0 : val)
//    this.next = (next===undefined ? null : next) }

var reverseList = function(head) {
  let prev = null;
  let current = head;

  while(current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  return prev
};
