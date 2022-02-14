/* Given the root of a binary tree, invert the tree, and return its root.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertBinaryTree = (root) => {
    const queue = [root];

    while (queue.length) {
        let dequeued = queue.shift();
        if (dequeued) {
            [dequeued.right, dequeued.left] = [dequeued.left, dequeued.right];
        }
        if (dequeued) queue.push(dequeued.left);
        if (dequeued) queue.push(dequeued.right);
    }
    return root;
};
