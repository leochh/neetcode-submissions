// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map();
        let dummy = new Node(0);
        const oldHead = head;
        let copy = dummy;
        while(head) {
            copy.next = new Node(head.val);
            map.set(head, copy.next);
            copy = copy.next;
            head = head.next;
        }
        head = oldHead;
        copy = dummy.next;
        while(head) {
            copy.random = map.get(head.random);
            head = head.next;
            copy = copy.next;
        }
        return dummy.next;
    }
}
