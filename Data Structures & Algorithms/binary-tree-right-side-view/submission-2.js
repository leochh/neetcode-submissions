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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        let cur = [];
        let next = [];
        if(root) cur.push(root);
        while (cur.length) {
            res.push(cur[0].val);
            for (const { left, right } of cur) {
                if (right) next.push(right);
                if (left) next.push(left);
            }
            [cur, next] = [next, []];
        }
        return res;
    }
}
