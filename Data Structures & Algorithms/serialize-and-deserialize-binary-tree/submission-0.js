class Codec {
    /**
     * Encodes a tree to a single string.
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "#";
        const q = [root];
        const res = [];
        let head = 0;
        while (head < q.length) {
            const node = q[head++];
            if (!node) {
                res.push("#");
            } else {
                res.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data === "#") return null;
        const vals = data.split(",");
        const root = new TreeNode(+vals[0]);
        const q = [root];
        let head = 0, idx = 1;
        while (head < q.length) {
            const node = q[head++];
            if (vals[idx] !== "#") {
                node.left = new TreeNode(+vals[idx]);
                q.push(node.left);
            }
            idx++;
            if (vals[idx] !== "#") {
                node.right = new TreeNode(+vals[idx]);
                q.push(node.right);
            }
            idx++;
        }
        return root;
    }
}

