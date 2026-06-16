class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /* bfs */
        const n = numCourses;
        const indegrees = Array(n).fill(0);
        const graph = Array.from({ length: n }, () => []);

        for (const [u, v] of prerequisites) {
            graph[v].push(u);
            indegrees[u]++;
        }
        const q = [];
        for (let i = 0; i < n; i++) if (indegrees[i] === 0) q.push(i);

        let count = 0;
        while (count < q.length) {
            const u = q[count++];
            for (const v of graph[u]) {
                indegrees[v]--;
                if (indegrees[v] === 0) {
                    q.push(v);
                }
            }
        }
        return count === n;
    }
}
