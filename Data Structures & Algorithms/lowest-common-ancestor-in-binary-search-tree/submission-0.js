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
        const dfs = (node) => {
            if(!node) return node;
            if(node.val === p.val || node.val === q.val) return node;
            const left = dfs(node.left);
            const right = dfs(node.right);
            if(left && right) return node;
            return left || right;
        }
        const res = dfs(root);
        return res;
    }
}
