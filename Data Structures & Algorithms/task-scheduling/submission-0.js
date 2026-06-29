class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = Array(26).fill(0);
        const offset = 'A'.charCodeAt(0);
        for(const t of tasks) {
            count[t.charCodeAt(0)-offset]++;
        }
        const maxHeap = new MaxPriorityQueue();
        count.forEach(v => v && maxHeap.enqueue(v));

        const q = new Queue();
        let t = 0;

        while(maxHeap.size() || q.size()) {
            t++;
            if(maxHeap.size()) {
                const cnt = maxHeap.dequeue() - 1;
                if(cnt) q.push([cnt, t + n]);
            }
            if(q.size() && q.front()[1] === t) {
                maxHeap.enqueue(q.pop()[0]);
            }
        }
        return t;
    }
}
