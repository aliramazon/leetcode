/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Example 1:

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.
*/

const rangeSumDepthFirst = (root, low, high) => {
    let sum = 0;

    const depthFirstTraverse = (node) => {
        if (!node) return 0;
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
        if (node.val > low) depthFirstTraverse(node.left);
        if (node.val < high) depthFirstTraverse(node.right);
    };
    depthFirstTraverse(root);

    return sum;
};

const rangeSumBreadthFirst = (root, low, high) => {
    let sum = 0;
    let queue = [];
    queue.unshift(root);

    while (queue.length) {
        let dequeued = queue.pop();
        if (dequeued.val >= low && dequeued.val <= high) {
            sum += dequeued.val;
        }

        if (dequeued.left) {
            queue.unshift(dequeued.left);
        }
        if (dequeued.right) {
            queue.unshift(dequeued.right);
        }
    }
    return sum;
};
