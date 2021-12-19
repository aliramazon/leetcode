/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 */

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

const reverseLinkedListRecursive = (head) => {};
