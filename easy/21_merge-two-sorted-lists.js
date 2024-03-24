/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

const mergeTwoSortedLinkedList = (l1, l2) => {
    let head = { val: 0, next: null };
    let current = head;

    while (l1 || l2) {
        if (!l2 || (l1 && l1.val < l2.val)) {
            current.next = { val: l1.val, next: null };
            l1 = l1.next;
        } else {
            current.next = { val: l2.val, next: null };
            l2 = l2.next;
        }
        current = current.next;
    }

    return head.next;
};
