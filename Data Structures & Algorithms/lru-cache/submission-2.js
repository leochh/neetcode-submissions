class Node {
    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    moveToTail(node) {
        this.remove(node);
        this.insert(node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
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
    put(key, value) {
        if(this.map.has(key)) {
            const node = this.map.get(key);
            node.val = value;
            this.moveToTail(node);
            return;
        }
        if(this.map.size === this.capacity) {
            this.map.delete(this.head.next.key);
            this.remove(this.head.next);
        }
        const node = new Node(key, value);
        this.insert(node);
        this.map.set(key, node);
    }
}
