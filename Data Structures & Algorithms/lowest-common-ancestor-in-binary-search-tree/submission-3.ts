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
        const dfs = (node) => {
            if(!node) return null;
            if(node === p || node === q) return node;
            const left = dfs(node.left);
            const right = dfs(node.right);
            if(left && right) return node;
            return left || right;
        }

        return dfs(root);
    }
}
