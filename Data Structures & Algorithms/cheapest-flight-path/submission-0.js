class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const graph = Array.from({ length: n }, () => []);
        for (const [u, v, w] of flights) {
            graph[u].push([v, w]);
        }
        const prices = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
        prices[src][0] = 0;

        const pq = new PriorityQueue((a, b) => a[0] - b[0]);
        pq.enqueue([0, src, 0]); // price, node, edges

        while (!pq.isEmpty()) {
            const [p, u, e] = pq.dequeue();
            if (p > prices[u][e]) continue;
            if (u === dst) return p;
            for (const [v, w] of graph[u]) {
                const [np, ne] = [p + w, e + 1];
                if(ne > k + 1 || np >= prices[v][ne]) continue;
                prices[v][ne] = np;
                pq.enqueue([np, v, ne]);
            }
        }
        return -1;
    }
}
