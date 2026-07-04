class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const map = {};
        for(const [from, to] of tickets) {
            map[from] = map[from] || [];
            map[from].push(to);
        }
        Object.values(map).forEach(arr => arr.sort());
        let res = null;
        const track = [];
        const dfs = (start) => {
            if(res) return;
            if(track.length === tickets.length) {
                res = ['JFK', ...track];
                return;
            }
            const dests = map[start];
            if(!dests || !dests.length) return;
            for(let i = 0; i < dests.length; i++) {
                const to = dests[i];
                if(!to) continue; // visited
                track.push(to);
                dests[i] = null;
                dfs(to); // use to as start
                dests[i] = to;
                track.pop();
            }
        }
        dfs('JFK')
        return res;
    }
}
