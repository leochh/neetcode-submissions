class LRUCache {
    map = new Map();
    capacity: number;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.map.has(key)) return -1;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.map.delete(key);
        this.map.set(key, value);
        if(this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
    }
}
