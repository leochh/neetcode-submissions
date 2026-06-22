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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
        let head = dummy;
        while(list1 && list2) {
            if(list1.val > list2.val) {
                head.next = list2;
                list2 = list2.next;
            } else {
                head.next = list1;
                list1 = list1.next;
            }
            head = head.next;
        }
        head.next = list1 || list2;
        return dummy.next;
    }
}
