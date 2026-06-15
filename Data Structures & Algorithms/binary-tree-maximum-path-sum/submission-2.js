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
    maxPathSum(root) {

        let max = root.val;

        const dfs = (node) => {
            if(!node) return 0;
            const left = dfs(node.left);
            const right = dfs(node.right);
            const nodeMax = Math.max(left, right, 0) + node.val;
            const pathMax = Math.max(left, 0) + Math.max(right, 0) + node.val;
            max = Math.max(max, pathMax);
            return nodeMax;
        }

        dfs(root);
        return max;
    }
}
