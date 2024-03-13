// 143. Reorder List
// Medium
// https://leetcode.com/problems/reorder-list/description/

//* You are given the head of a singly linked-list. The list can be represented as:
          //* L0 → L1 → … → Ln - 1 → Ln
//* Reorder the list to be on the following form:
          //* L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
//* You may not modify the values in the list's nodes. Only nodes themselves may be changed.

/**
 * * Example 1:
 * * Input: head = [1,2,3,4]
 * * Output: [1,4,2,3]

* * Example 2:
* * Input: head = [1,2,3,4,5]
* * Output: [1,5,2,4,3]

*/

//! my explanation
//! find the middle of the LL
  //! slow = head
  //! fast = head.next
  //! while fast && fast.next
  //!      slow = slow.next
  //!      fast = fast.next.next
//! now reverse the second half of the list
//! finally then merge the two halves

var reorderList = function(head) {
  let slow = head;
  let fast = head.next;
  while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
  }

  let prev = null;
  let current = slow.next;
  slow.next = null //this splits our list into two halves
  while (current) {
      let next_hold = current.next;
      current.next = prev;
      prev = current;
      current = next_hold;
  }
  let second_half = prev;

  let first_half = head
  while(first_half && second_half) {
      first_half_next = first_half.next;
      let second_half_next = second_half.next;

      first_half.next = second_half;
      second_half.next = first_half_next;


     first_half = first_half_next
     second_half = second_half_next
  }
};
