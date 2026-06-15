class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const n of nums) {
            map[n] = (map[n] ||0) + 1;
        }
        const bucket = []; // [t]: n[]
        for(const [k,v] of Object.entries(map)) {
            bucket[v] = bucket[v] || [];
            bucket[v].push(Number(k));
        }
        const res = [];
        for(let i=bucket.length; i>0;i--) {
            if (res.length >= k) return res;
            if(bucket[i-1]) res.push(...bucket[i-1]);
        }
        return res.slice(0,k);
    }
}
