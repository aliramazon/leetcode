/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

1 -> 2 -> 3 -> 4 -> 5 -> 6
1 -> 2 -> 3 -> 4 -> 5 <- 6
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

const reverseLinkedListRecursive = (head) => {
    if (!head || !head.next) return head;
    let preTail = reverseLinkedListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return preTail;
};
