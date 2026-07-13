class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const dist = (x, y) => x ** 2 + y ** 2;
        const maxHeap = new MaxPriorityQueue(([x, y]) => dist(x, y));

        for(const p of points) {
            maxHeap.enqueue(p);
            if(maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }
        return maxHeap.toArray();
    }
}
