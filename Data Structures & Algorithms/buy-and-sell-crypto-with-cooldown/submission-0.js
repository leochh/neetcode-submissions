class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        const dp = Array.from({length: n + 2}, () => [0, 0]); // [empty, hold]
        dp[0] = [0, -Infinity];
        dp[1] = [0, -Infinity];

        for(let i = 2; i < dp.length; i++) {
            const empty = Math.max(
                dp[i-1][0], // empty -> empty
                dp[i-1][1] + prices[i-2] // hold -> sold
            );
            const hold = Math.max(
                dp[i-1][1], // hold -> hold
                dp[i-2][0] - prices[i-2] // cooldown -> buy
            );
            dp[i] = [empty, hold];
        }
        return dp.at(-1)[0];
    }
}
