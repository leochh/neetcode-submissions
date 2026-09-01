class ListNode {
    key: number;
    val: number;
    prev: ListNode | null;
    next: ListNode | null;
    constructor(key: number, val: number, prev: ListNode | null = null, next: ListNode | null = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class LRUCache {
    map = new Map();
    tail: ListNode;
    head: ListNode;
    capacity: number;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node: ListNode): void {
        if(!node) return;
        if(node.next) node.next.prev = node.prev;
        if(node.prev) node.prev.next = node.next;
    }

    moveToTail(node: ListNode): void {
        this.remove(node);
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        this.tail.prev = node;
        node.next = this.tail;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this.moveToTail(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.map.has(key)) {
            const node = this.map.get(key);
            this.remove(node);
            this.map.delete(key);
        }
        if(this.map.size === this.capacity) {
            const last = this.head.next;
            this.remove(last);
            this.map.delete(last.key);
        }
        const node = new ListNode(key, value);
        this.moveToTail(node);
        this.map.set(key, node);
    }
}
