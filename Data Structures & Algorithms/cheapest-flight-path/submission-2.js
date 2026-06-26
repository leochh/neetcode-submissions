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
        let prices = Array(n).fill(Infinity);
        prices[src] = 0;

        for(let i = 0; i <= k; i++) { // k stops
            const _prices = [...prices];
            for(const [s, d, p] of flights) {
                if(prices[s] === Infinity) continue;
                _prices[d] = Math.min(_prices[d], prices[s] + p);
            }
            prices = _prices;
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}
