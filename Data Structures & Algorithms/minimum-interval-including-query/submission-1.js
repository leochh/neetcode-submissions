class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);
        const sorted = [...queries].sort((a, b) => a - b);
        const minHeap = new MinPriorityQueue(v => v[0]); // [len, end];

        let i  = 0;
        const n = intervals.length;
        const res = {};
        for(const q of sorted) {
            while(i < n && intervals[i][0] <= q) {
                const [s, e] = intervals[i++];
                minHeap.enqueue([e - s + 1, e]);
            }
            while(!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.dequeue();
            }
            res[q] = minHeap.isEmpty() ? -1 : minHeap.front()[0];
        }
        return queries.map(q => res[q]);
    }
}
