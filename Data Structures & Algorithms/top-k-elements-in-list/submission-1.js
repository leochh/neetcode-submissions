class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const n of nums) {
            map[n] = (map[n]||0) + 1;
        }
        return Object.entries(map).sort((a,b) => a[1]-b[1]).slice(-k).map(v=>v[0]);
        
    }
}
