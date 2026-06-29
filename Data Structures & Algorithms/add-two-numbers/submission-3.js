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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        if(!l1 || !l2) return l1 || l2;
        const dummy = new ListNode(0);
        let head = dummy;
        let carry = 0;
        while(l1 && l2) {
            const sum = l1.val + l2.val + carry;
            const val = sum % 10;
            carry = (sum - val) / 10;
            head.next = new ListNode(val);
            head = head.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        const carryNode = carry ? new ListNode(carry) : null;
        const listNode = l1 || l2;
        head.next = this.addTwoNumbers(listNode, carryNode);
        return dummy.next;
    }
}
