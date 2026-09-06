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
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        const min = Math.min(p.val, q.val);
        const max = Math.max(p.val, q.val);
        const dfs = (node) => {
            if(!node) return null;
            if(node.val > max) return dfs(node.left);
            if(node.val < min) return dfs(node.right);
            return node;
        }

        return dfs(root);
    }
}
