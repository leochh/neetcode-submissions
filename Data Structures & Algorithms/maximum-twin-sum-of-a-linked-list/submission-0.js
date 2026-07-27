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
        // 1, 2, 3, 4, 5, 6
        const dummy = new ListNode(0, head);
        let fast = dummy, slow = head;
        let n = 0;
        while(fast?.next?.next) {
            fast = fast.next.next;
            slow = slow.next;
            n++;
        }
        const res = Array(n).fill(0);
        fast = slow, slow = head;
        let i = 0;
        while(fast) {
            res[i] += slow.val;
            res[n-1-i] += fast.val;
            slow = slow.next;
            fast = fast.next;
            i++;
        }
        return Math.max(...res);
    }
}
