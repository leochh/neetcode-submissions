/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start); // start asc
        const q = new MinPriorityQueue();

        let count = 0;
        for (const {start, end} of intervals) {
            if (q.isEmpty()) {
                count++;
                q.enqueue(end);
            } else {
                if (q.front() > start) {
                    count++;
                } else {
                    q.dequeue();
                }
                q.enqueue(end);
            }
        }
        return count;
    }
}
