/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSame = (a, b) => {
            if (!a && !b) return true;
            if (!a || !b) return false;
            return a.val === b.val && isSame(a.left, b.left) && isSame(a.right, b.right);
        };
        if(!root) return false;
        return isSame(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
