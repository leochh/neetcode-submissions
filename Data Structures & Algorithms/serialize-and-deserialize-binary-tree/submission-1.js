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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const dfs = (node) => {
            if (!node) return "#";
            return `${node.val},${dfs(node.left)},${dfs(node.right)}`;
        };
        return dfs(root);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(",");
        let idx = 0;
        const dfs = () => {
            if (vals[idx] === "#") {
                idx++;
                return null;
            }
            const node = new TreeNode(+vals[idx++]);
            node.left = dfs();
            node.right = dfs();
            return node;
        };
        return dfs();
    }
}
