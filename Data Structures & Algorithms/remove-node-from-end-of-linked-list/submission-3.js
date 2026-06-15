/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const rec = (node) => {
            if(!node) return null;
            node.next = rec(node.next);
            n--;
            // since last node is null
            // delete current node instead of next
            if(!n) return node.next;
            return node;
        }
        return rec(head);
    }
}
