/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
Follow up: Could you do it in O(n) time and O(1) space?
 */
/**
 * @param {ListNode} head
 * @return {boolean}
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

const isLinkedListPalindrome = (head) => {
    let slow = head;
    let fast = head;

    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let nextReversedHalf = reverseLinkedList(slow.next);

    let firstHalfCurrent = head;
    let secondHalfCurrent = nextReversedHalf;

    while (firstHalfCurrent && secondHalfCurrent) {
        if (firstHalfCurrent.val !== secondHalfCurrent.val) {
            slow.next = reverseLinkedList(nextReversedHalf);
            return false;
        }
        firstHalfCurrent = firstHalfCurrent.next;
        secondHalfCurrent = secondHalfCurrent.next;
    }

    slow.next = reverseLinkedList(nextReversedHalf);
    return true;
};
