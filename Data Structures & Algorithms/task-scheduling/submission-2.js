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
        const count = [...Object.values(map)];
        const max = Math.max(...count);
        const maxCounts = count.filter(v => v === max).length;
        return Math.max((max - 1) * (n + 1) + maxCounts, tasks.length);
    }
}
