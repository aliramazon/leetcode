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
