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
    reorderList(head) {
        const stack = [];
        while(head) {
            stack.push(head);
            head = head.next;
        }
        let p = stack[0];
        while(p) {
            const last = stack.pop();
            const next= p.next;
            if(next === last || next === last.next) {
                last.next = null;
                break;
            }
            p.next = last;
            last.next = next;
            p = next;
        }
    }
}
