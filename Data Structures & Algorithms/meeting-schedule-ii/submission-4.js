class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const times = [];
        for (const { start, end } of intervals) {
            times.push([end, -1]);   // meeting ends
            times.push([start, 1]);  // meeting starts
        }
        // Sort by time, then by type (-1 before 1)
        times.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

        let res = 0, cur = 0;
        for (const [_, change] of times) {
            cur += change;
            res = Math.max(res, cur);
        }
        return res;
    }
}

