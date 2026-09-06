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
    cloneGraph(node: Node | null): Node | null {
        const map = new Map<Node, Node>();

        const clone = (node: Node | null) => {
            if(!node) return node;
            if(map.has(node)) return map.get(node);

            const clonedNode = new Node(node.val);
            map.set(node, clonedNode);
            for(const nbr of node.neighbors) {
                clonedNode.neighbors.push(clone(nbr));
            }
            return clonedNode;
        }

        return clone(node);
    }
}
