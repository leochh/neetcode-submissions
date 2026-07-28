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
     * @return {number}
     */
    pairSum(head) {
        let fast = head, slow = head;
        let prev = null;
        while(fast?.next) {
            fast = fast.next.next;
            const next = slow.next;
            slow.next = prev;
            [prev, slow] = [slow, next];
        }
        let max = head.val;
        while(slow) {
            max = Math.max(prev.val + slow.val, max);
            prev = prev.next;
            slow = slow.next;
        }
        return max;

    }
}
