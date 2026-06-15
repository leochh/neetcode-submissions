class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();
        for(let i = 0; i < n; i++) {
            graph.set(i, []);
        }
        for(const [u, v] of edges) {
            graph.get(u).push(v);
            graph.get(v).push(u);
        }


        const dfs = (u) => {
            if(!graph.has(u)) return;
            const nodes = graph.get(u);
            graph.delete(u);
            for(const v of nodes) {
                dfs(v)
            }
        }

        let comps = 0;
        while(graph.size !== 0) {
            comps++;
            const root = graph.keys().next().value;
            dfs(root)
        }
        return comps;
    }
}
