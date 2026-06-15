class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const graph = Array.from({length: n}, () => []);
        for(let [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        const seen = new Set();
        const dfs = (u, p) => {
            if(seen.has(u)) return false;
            seen.add(u);
            return graph[u].every(v => v === p || dfs(v, u));
        }
        return dfs(0) && seen.size === n;
    }
}
