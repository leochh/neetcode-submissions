class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        /* heap */
        const q = new MaxPriorityQueue();
        for(const s of stones) q.enqueue(s);
        while(q.size() > 1) {
            const c = q.dequeue() - q.dequeue();
            if (c) q.enqueue(c);
        }
        return q.front() || 0;
    }
}
