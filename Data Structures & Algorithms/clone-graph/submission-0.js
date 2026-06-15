/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map();

        const dfs = (node) => {
            if(!node) return node;
            if(map.has(node)) return map.get(node);
            const clone = new Node(node.val);
            map.set(node, clone);
            clone.neighbors = node.neighbors.map(n => dfs(n));
            return clone;
        }

        return dfs(node);
    }
}
