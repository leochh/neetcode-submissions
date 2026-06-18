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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const max = Math.max(p.val, q.val);
        const min = Math.min(p.val, q.val);
        const dfs = (node) => {
            if(node.val < min) return dfs(node.right);
            if(node.val > max) return dfs(node.left);
            return node;
        }
        return dfs(root);
    }
}
