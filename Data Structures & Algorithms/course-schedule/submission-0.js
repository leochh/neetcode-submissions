class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /* dfs */
        const n = numCourses;
        const graph = Array.from({length: n}, () => []);
        for(const [u, v] of prerequisites) {
            graph[v].push(u);
        }

        const onPath = Array(n).fill(false);
        const visited = Array(n).fill(false);

        let hasCycle = false;
        const dfs = (u) => {
            if(onPath[u]) {
                hasCycle = true;
                return;
            }
            if(visited[u] || hasCycle) return;
            visited[u] = true;
            onPath[u] = true;
            for(const v of graph[u]) {
                dfs(v);
            }
            onPath[u] = false;
        }
        for(let i = 0; i < n; i++) {
            dfs(i);
        }
        return !hasCycle;
    }
}
