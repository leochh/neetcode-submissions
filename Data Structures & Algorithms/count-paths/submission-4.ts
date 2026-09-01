class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        const dp = Array.from({length: m}, () => Array(n).fill(0));
        dp[0].fill(1);
        dp.forEach(row => row[0] = 1);

        for(let i = 1; i < m; i++) {
            for(let j = 1; j < n; j++) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        return dp.at(-1).at(-1);
    }
}
