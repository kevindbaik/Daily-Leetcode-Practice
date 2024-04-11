// 83. Remove Duplicates from Sorted List
// Easy
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

//* Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * * Example 1:
 * * Input:head = [1,1,2]
 * * Output: [1,2]

* * Example 2:
* * Input: head = [1,1,2,3,3]
* * Output: [1,2,3]

*/


function deleteDuplicates(head) {
  let current = head;
  while (current && current.next) {
      if (current.val === current.next.val) {
          // we skip the next node because it's a duplicate
          current.next = current.next.next;
      } else {
          // we moove to the next unique element
          current = current.next;
      }
  }
  return head;
}
