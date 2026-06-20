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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const pq = new PriorityQueue((a, b) => a.val - b.val);
        const dummy = new ListNode(0);
        let head = dummy;
        lists.forEach(v => pq.enqueue(v));
        while(!pq.isEmpty()) {
            const node = pq.dequeue();
            if(node.next) pq.enqueue(node.next);
            head.next = node;
            head = node;
        }
        return dummy.next;
    }
}
