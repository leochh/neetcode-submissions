class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        // brute force
        const res = [];
        for(const q of queries) {
            let len = Infinity;
            for(const [s, e] of intervals) {
                if(q >= s && q <= e) {
                    len = Math.min(len, e - s + 1);
                }
            }
            res.push(len === Infinity ? -1 : len);
        }
        return res;
    }
}
