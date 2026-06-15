class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        /* dp */
        const n = nums.length;
        // dp[i] = furthurst distance from position i
        const dp = Array(n-1).fill(0);
        dp[0] = nums[0];
        for(let i = 1; i < n - 1; i++) {
            dp[i] = dp[i-1] >= i ? Math.max(dp[i-1], i + nums[i]) : dp[i-1];
        }
        return dp.at(-1) >= n - 1;

    }
}
