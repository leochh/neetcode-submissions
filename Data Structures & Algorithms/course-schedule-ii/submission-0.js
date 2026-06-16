class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const n = numCourses;
        const graph = Array.from({length: n}, () => []);
        for(const [u, v] of prerequisites) {
            graph[v].push(u);
        }

        const onPath = Array(n).fill(false);
        const visited = Array(n).fill(false);

        let hasCycle = false;
        const postorder = [];
        const dfs = (u) => {
            if(onPath[u])  hasCycle = true;
            if(hasCycle || visited[u]) return;
            visited[u] = true;
            onPath[u] = true;
            for(const v of graph[u]) dfs(v);
            onPath[u] = false
            postorder.push(u);
        }

        for(let i=0; i<n; i++) dfs(i);

        return hasCycle ? [] : postorder.reverse();

    }
}
