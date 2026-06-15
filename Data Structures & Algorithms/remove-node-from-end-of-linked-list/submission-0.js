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
        /* count nodes */
        let count = 0;
        let p = head;
        while(p) {
            count++;
            p = p.next;
        }
        const parentIdx = count - n - 1;
        let curIdx = -1;
        const dummy = new ListNode(0, head);
        let parent = dummy;
        while(curIdx < parentIdx) {
            parent = parent.next;
            curIdx++;
        }
        parent.next = parent.next.next;
        return dummy.next;
    }
}
