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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pid = 0,
            idx = 0;

        const dfs = (limit) => {
            if (pid >= preorder.length) return null;

            if (inorder[idx] === limit) {
                idx++;
                return null;
            }

            const val = preorder[pid++];
            const node = new TreeNode(val);
            node.left = dfs(val);
            node.right = dfs(limit);
            return node;
        };

        return dfs();
    }
}
