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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        const stack = [];
        while(head) {
            stack.push(head);
            head = head.next;
        }
        let l = 0, r = stack.length - 1;
        let cur = null;
        while(l < r) {
            const left = stack[l++];
            const right = stack[r--];

            const next = left.next;
            left.next = right;
            right.next = next;
            cur = next;
        }
        if(cur) cur.next = null;
    }
}
