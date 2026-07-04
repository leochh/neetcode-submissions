class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = {};
        for(const [src, dst] of tickets) {
            adj[src] = adj[src] || [];
            adj[src].push(dst);
        }
        Object.values(adj).forEach(dsts => dsts.sort().reverse());
        const res = []
        const dfs = (src) => {
            while(adj[src]?.length) {
                dfs(adj[src].pop());
            }
            res.push(src);
        }
        dfs('JFK');
        return res.reverse();
    }
}
