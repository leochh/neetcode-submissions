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
     * @return {number[][]}
     */
    levelOrder(root) {
        /* bfs */
        const res = [];
        if(!root) return res;
        let head = 0;
        const q = [root];
        while(head < q.length) {
            const size = q.length - head;
            const nodes = [];
            for(let i = 0; i < size; i++) {
                const node = q[head++];
                nodes.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            res.push(nodes);
        }
        return res;
    }
}
