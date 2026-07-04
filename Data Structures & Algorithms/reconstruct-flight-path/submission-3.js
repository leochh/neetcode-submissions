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
        const res = [];
        const stack = ['JFK'];
        while(stack.length) {
            const cur = stack.at(-1);
            if(!adj[cur]?.length) res.push(stack.pop());
            else stack.push(adj[cur].pop());
        }
        return res.reverse();
    }
}
