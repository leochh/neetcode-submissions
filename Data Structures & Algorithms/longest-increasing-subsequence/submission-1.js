class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const dp = Array(n).fill(1);
        for(let i = 1; i < n; i++) {
            for(let j = i; j >= 0; j--) {
                if(nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
        console.log(dp)
        return Math.max(...dp);
    }
}
