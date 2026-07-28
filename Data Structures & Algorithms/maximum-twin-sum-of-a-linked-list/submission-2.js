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
        let prev = null, next = null;
        while(fast?.next) {
            fast = fast.next.next;
            next = slow.next;
            slow.next = prev;
            [prev, slow] = [slow, next];
        }
        let max = head.val;
        while(next) {
            max = Math.max(prev.val + next.val, max);
            prev = prev.next;
            next = next.next;
        }
        return max;

    }
}
