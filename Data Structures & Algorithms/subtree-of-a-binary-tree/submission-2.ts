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
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const isSame = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
            if(!root && !subRoot) return true;
            if(!root || !subRoot) return false;
            return root.val === subRoot.val && isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
        }
        if(!root && !subRoot) return true;
        if(!root) return false;
        return isSame(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
