// 138. Copy List with Random Pointer
// Medium
// https://leetcode.com/problems/copy-list-with-random-pointer/description/

//* A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

//* Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list

//* For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

/**
 * * Example 1:
 * * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * * Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]


* * Example 2:
* * Input: head = [[3,null],[3,0],[3,null]]
* * Output: [[3,null],[3,0],[3,null]]

*/

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

function copyRandomList(head) {
  if (!head) return null;

  // step1: create copied nodes and interleave them with original nodes
  let current = head;
  while (current) {
      let copied = new Node(current.val, current.next, null);
      current.next = copied;
      current = copied.next;
  }

  // step2: assign random pointers for the copied nodes
  current = head;
  while (current) {
      if (current.random) {
          current.next.random = current.random.next;
      }
      current = current.next.next;
  }

  // step3: separate the interleaved list into original and copied lists
  current = head;
  let copiedHead = head.next;
  let copy = copiedHead;
  while (current) {
      current.next = current.next.next;
      current = current.next;
      if (copy.next) {
          copy.next = copy.next.next;
          copy = copy.next;
      }
  }

  return copiedHead;
}
