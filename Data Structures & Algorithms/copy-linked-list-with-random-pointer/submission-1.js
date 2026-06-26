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
        if(!head) return null;
        const map = new Map();
        const newHead = new Node(head.val);
        let p = newHead;
        map.set(head, newHead);
        while(head) {
            const {next, random} = head;
            if(next && !map.has(next))  map.set(next, new Node(next.val));
            if(random && !map.has(random)) map.set(random, new Node(random.val));
            p.random = map.get(random) || null;
            p.next = map.get(next) || null;
            p = p.next;
            head = head.next;
        }
        return newHead;
    }
}
