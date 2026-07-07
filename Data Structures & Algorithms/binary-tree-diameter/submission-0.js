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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        // node => len
        let res = 0;
        const dfs = (node) => {
            if(!node) return 0;
            const l = dfs(node.left);
            const r = dfs(node.right);
            res = Math.max(res, l + r);
            return Math.max(l, r) + 1;
        }

        dfs(root);
        return res;
    }
}
