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
        const parse = (head) => {
            let value = 0n;
            let pow = 1n;
            while(head) {
                value += BigInt(head.val) * pow;
                pow *= 10n;
                head = head.next;
            }
            return value;
        }
        const a = parse(l1);
        const b = parse(l2);
        let sum = a + b;
        let dummy = new ListNode(0);
        if(!sum) return dummy;
        let head = dummy;
        while(sum) {
            const val = sum % 10n;
            head.next = new ListNode(Number(val));
            sum = (sum - val) / 10n;
            head = head.next;
        }
        return dummy.next;
    }
}
