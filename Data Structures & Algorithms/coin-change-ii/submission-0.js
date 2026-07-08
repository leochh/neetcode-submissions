class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const n = coins.length;
        // dp[i][j] = coins needed for amount i using first j coins
        const dp = Array.from({length: amount + 1}, () => Array(n + 1).fill(0));
        dp[0].fill(1);

        for(let i = 1; i <= amount; i++) {
            for(let j = 1; j <= n; j++) {
                dp[i][j] = dp[i][j-1];
                const c = coins[j - 1];
                if(c <= i) dp[i][j] += dp[i-c][j];
            }
        }
        console.log(dp)
        return dp.at(-1).at(-1);
    }
}
