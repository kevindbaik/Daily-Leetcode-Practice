// 19. Remove Nth Node From End of List
// Medium
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

//* Given the head of a linked list, remove the nth node from the end of the list and return its head.
/**
 * * Example 1:
 * * Input: head = [1,2,3,4,5], n = 2
 * * Output: [1,2,3,5]

* * Example 2:
* * Input: head = [1], n = 1
* * Output: []

* * Example 3:
* * Input: head = [1,2], n = 1
* * Output: [1]
*/

//! my explanation
//! two pointers
  //! first points at + n
  //! second starts normally
//! whatever n is pointing at we remove

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let pointerS = dummy;
  let pointerE = dummy;

  for(let i = 0; i <= n; i++) {
      pointerE = pointerE.next
  };
  // now pointerE will be n steps ahead

  // we stop at pointerE.next because we want the node right before it ends
  // that way pointerS is the PREVIOUS node of the one we want to remove
  while(pointerE) {
      pointerS = pointerS.next;
      pointerE = pointerE.next
  }
  // now we know which node to remove (pointerS.next)
  pointerS.next = pointerS.next.next;

  return dummy.next;
}
