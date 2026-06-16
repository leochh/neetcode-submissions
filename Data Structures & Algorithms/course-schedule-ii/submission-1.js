class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const n = numCourses;
        const graph = Array.from({ length: n }, () => []);
        const indegrees = Array(n).fill(0);
        for (const [u, v] of prerequisites) {
            graph[v].push(u);
            indegrees[u]++;
        }
        const q = [];
        for (let i = 0; i < n; i++) {
            if (indegrees[i] === 0) q.push(i);
        }

        let head = 0;
        while (head < q.length) {
            const u = q[head++];
            for (const v of graph[u]) {
                indegrees[v]--;
                if (indegrees[v] === 0) {
                    q.push(v);
                }
            }
        }
        return head === n ? q : [];
    }
}
