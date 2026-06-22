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

        for (const { start, end } of intervals) {
            if (!q.isEmpty() && q.front() <= start) {
                q.dequeue();
            }
            q.enqueue(end);
        }

        return q.size();
    }
}
