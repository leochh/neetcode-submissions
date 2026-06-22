class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        `
        \-----/ \-----/
                 new

        \------/
            \----/ new

                \-----/
            \-----/ new
        `
        const res = [];
        for(const interval of intervals) {
            if(!newInterval || interval[1] < newInterval[0]) {
                // before
                res.push(interval);
            } else if (interval[0] > newInterval[1]) {
                // after
                res.push(newInterval, interval);
                newInterval = null;
            } else {
                // overlap
                newInterval[0] = Math.min(newInterval[0], interval[0]);
                newInterval[1] = Math.max(newInterval[1], interval[1]);
            }
        }
        if(newInterval) res.push(newInterval);
        return res;
    }
}
