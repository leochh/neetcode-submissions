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
        // preorder: root -> left -> right
        // inorder: left -> root -> right
        const build = (pre, inor) => {
            if(!pre.length) return null;
            const nodeVal = pre[0];
            const idx = inor.findIndex(v => v === nodeVal);
            const node = new TreeNode(nodeVal);
            node.left = build(pre.slice(1, idx + 1), inor.slice(0, idx));
            node.right = build(pre.slice(idx+1), inor.slice(idx+1));
            return node;
        }
        return build(preorder, inorder);
    }
}
