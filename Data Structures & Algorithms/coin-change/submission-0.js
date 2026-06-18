class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const m = amount;
        const n = coins.length;
        // dp[i][j] = min coins for amount i using [0...j-1] coins
        const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(Infinity));
        // dp[0][j] = 0; dp[i][0] = Infinity;
        dp[0].fill(0);
        // dp[i][j] = Math.min(dp[i][j-1], 1+dp[i-coins[j]][j])
        for(let i = 1; i <= m; i++) {
            for(let j = 1; j <= n; j++) {
                dp[i][j] = dp[i][j - 1];
                if(coins[j - 1] <= i) dp[i][j] = Math.min(dp[i][j], 1+dp[i-coins[j - 1]][j]);
            }
        }
        return dp[m][n] === Infinity ? -1 : dp[m][n];
    }
}
