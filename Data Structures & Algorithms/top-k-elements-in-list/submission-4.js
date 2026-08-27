class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const maxHeap = new MinPriorityQueue(v => v[1]);
        const map = {};
        for(const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }
        Object.entries(map).forEach(v => {
            maxHeap.enqueue(v);
            if(maxHeap.size() > k) maxHeap.dequeue();
        })
        return maxHeap.toArray().map(v => v[0]);
    }
}
