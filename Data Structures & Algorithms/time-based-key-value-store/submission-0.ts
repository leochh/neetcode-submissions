class TimeMap {
    keyStore: Map<string, Map<number, string>>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        this.keyStore.set(key, this.keyStore.get(key) ?? new Map());
        this.keyStore.get(key).set(timestamp, value);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const map = this.keyStore.get(key);
        if(!map?.size) return "";
        const keys = [...map.keys()];
        
        let l = 0, r = keys.length;
        while(l < r) {
            const m = l + Math.floor((r - l) / 2);
            if(keys[m] > timestamp) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        if(l > 0) {
            const key = keys[l - 1];
            return map.get(key);
        }
        return "";
    }
}
