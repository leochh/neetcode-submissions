class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]); // asc start time
        const res = [];
        for(const [s, e] of intervals) {
            if(!res.length) res.push([s, e]);
            const last = res.at(-1);
            if(s <= last[1]) {
                last[1] = Math.max(e, last[1]);
            } else {
                res.push([s, e])
            }
        }
        return res;
    }
}
