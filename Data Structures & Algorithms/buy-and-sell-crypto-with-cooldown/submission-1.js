class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let dp2 = [0, -Infinity];
        let dp1 = [0, -Infinity];

        for(const price of prices) {
            const empty = Math.max(
                dp1[0], // empty -> empty
                dp1[1] + price // hold -> sold
            );
            const hold = Math.max(
                dp1[1], // hold -> hold
                dp2[0] - price // cooldown -> buy
            );
            [dp1, dp2] = [[empty, hold], dp1];
        }
        return dp1[0];
    }
}

