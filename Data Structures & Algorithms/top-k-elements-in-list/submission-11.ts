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
        const bucket = [];
        for(const [n, c] of map) {
            bucket[c] = bucket[c] || [];
            bucket[c].push(n);
        }
        const res = [];
        bucket.reverse().forEach(v => {
            if(res.length < k) res.push(...v);
        })
        return res;
    }
}
