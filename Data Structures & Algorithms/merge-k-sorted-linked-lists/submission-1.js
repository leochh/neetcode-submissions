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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const merge = (l1, l2) => {
            const dummy = new ListNode(0);
            let head = dummy;
            while (l1 && l2) {
                if (l1.val < l2.val) {
                    head.next = l1;
                    l1 = l1.next;
                } else {
                    head.next = l2;
                    l2 = l2.next;
                }
                head = head.next;
            }
            if (l1) head.next = l1;
            if (l2) head.next = l2;
            return dummy.next;
        };

        const mergeList = (lists) => {
            if (lists.length <= 2) return merge(...lists);
            const m = Math.floor(lists.length / 2);
            const left = mergeList(lists.slice(0, m));
            const right = mergeList(lists.slice(m));
            return merge(left, right);
        };

        return mergeList(lists);
    }
}
