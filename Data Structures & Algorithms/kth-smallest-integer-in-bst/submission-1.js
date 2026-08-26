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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const dfs = (node) => {
            if(!node) return null;
            const left = dfs(node.left);
            if(left !== null) return left;
            k--;
            if(!k) return node.val;
            return dfs(node.right);
        }
        return dfs(root);
    }
}
