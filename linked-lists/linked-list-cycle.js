// 141. Linked List Cycle
// Medium
// https://leetcode.com/problems/linked-list-cycle/description/

//* Given head, the head of a linked list, determine if the linked list has a cycle in it.
//* There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
//* Return true if there is a cycle in the linked list. Otherwise, return false.

/**
 * * Example 1:
 * * Input: head = [3,2,0,-4], pos = 1
 * * Output: true


* * Example 2:
* * Input: head = [1,2], pos = 0
* * Output: true

*/

//! my explanation
//! ALGORITH: Tortoise and the Hare
  // This approach involves two pointers that move at different speeds, usually called slow and fast.
  // The slow pointer moves one step at a time, while the fast pointer moves two steps at a time.
    // If there is a cycle in the list, the fast pointer will eventually meet the slow pointer within the cycle.

  function hasCycle(head) {
      if (head === null) return false;

      let slow = head;
      let fast = head.next;

      while (fast !== null && fast.next !== null) {
        if (slow === fast) {
          return true;
        }
        slow = slow.next;          // move the slow pointer one step
        fast = fast.next.next;     // move the fast pointer two steps
      }

      return false;
    }
