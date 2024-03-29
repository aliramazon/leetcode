/* 
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2
Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?

*/

const isSymmetric = (root) => {
    if (!root) return false;
    const queue = [root.left, root.right];

    while (queue.length) {
        let subTree1 = queue.shift();
        let subTree2 = queue.shift();
        if (!subTree1 && !subTree2) {
            continue;
        }
        if (!subTree1 || !subTree2 || subTree1.val !== subTree2.val) {
            return false;
        }
        queue.push(subTree1.left);
        queue.push(subTree2.right);
        queue.push(subTree1.right);
        queue.push(subTree2.left);
    }
    return true;
};

const isSymmetricRecursive = (root) => {
    if (!root) return false;

    const traverse = (subTree1, subTree2) => {
        if (!subTree1 && !subTree2) return true;
        if (!subTree1 || !subTree2) return false;
        return (
            subTree1.val === subTree2.val &&
            traverse(subTree1.left, subTree2.right) &&
            traverse(subTree1.right, subTree2.left)
        );
    };
    return traverse(root.left, root.right);
};
