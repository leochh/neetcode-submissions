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
        let slow = head, fast = head;
        while(fast?.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null, cur = slow.next;
        slow.next = null;
        while(cur) {
            const next = cur.next;
            cur.next = prev;
            [prev, cur] = [cur, next];
        }
        let l1 = head, l2 = prev;
        while(l2) {
            const n1 = l1.next;
            const n2 = l2.next;
            l1.next = l2;
            l2.next = n1;
            [l1, l2] = [n1, n2];
        }
    }
}
