class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = {};
        tickets.sort().reverse().forEach(
            ([src, dst]) => {
                adj[src] = adj[src] || [];
                adj[src].push(dst);
            }
        )
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
