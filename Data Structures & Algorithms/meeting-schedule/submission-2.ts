/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals.sort((a, b) => a.start - b.start);
        let lastEnd = 0;
        for(const {start, end} of intervals) {
            if(start < lastEnd) return false;
            lastEnd = end;
        }
        return true;
    }
}
