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
        if (!dequeued) continue;
        [dequeued.right, dequeued.left] = [dequeued.left, dequeued.right];
        queue.push(dequeued.left);
        queue.push(dequeued.right);
    }
    return root;
};

const invertBinaryTreeRecursive = (root) => {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left];
    invertBinaryTreeRecursive(root.left);
    invertBinaryTreeRecursive(root.right);
    return root;
};

const invertBinaryTreeRecursive1 = (root) => {
    if (!root) return null;
    let right = invertBinaryTreeRecursive(root.left);
    let left = invertBinaryTreeRecursive(root.right);
    root.right = right;
    root.left = left;
    return root;
};
