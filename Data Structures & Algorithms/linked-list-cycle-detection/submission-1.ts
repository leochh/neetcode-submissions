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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if(!head) return false;
        let slow = head, fast = head;
        while(slow && fast) {
            slow = slow.next;
            fast = fast.next?.next;
            if(slow && slow === fast) return true;
        }
        return false;
    }
}
