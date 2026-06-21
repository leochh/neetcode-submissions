class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (!intervals.length) return 0;
        intervals.sort((a, b) => a[1] - b[1]);
        let n = intervals.length;
        let count = 0,
            last = intervals[0][1];
        for (let i = 1; i < n; i++) {
            const [s, e] = intervals[i];
            if (s < last) count++;
            else last = e;
        }
        return count;
    }
}
