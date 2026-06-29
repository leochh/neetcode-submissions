class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = {};
        for(const t of tasks) {
            map[t] = (map[t] || 0) + 1;
        }
        const count = Object.values(map).sort((a, b) => b - a);
        const max = count[0];
        const slot = max - 1;
        let idle = slot * n;
        for(let i = 1; i < count.length; i++) {
            idle -= Math.min(slot, count[i]);
        }
        return Math.max(0, idle) + tasks.length;
    }
}
