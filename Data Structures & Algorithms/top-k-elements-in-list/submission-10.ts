class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        for(const n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        const heap = new MinPriorityQueue(a => a[1]);
        for(const entry of map) {
            heap.enqueue(entry);
            if(heap.size() > k) heap.dequeue();
        }
        const res = [];
        for(let i = 0; i < k; i++) {
            res.push(heap.dequeue()[0]);
        }
        return res;
    }
}
