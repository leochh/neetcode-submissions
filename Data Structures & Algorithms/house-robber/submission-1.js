class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        let dp1 = 0, dp2 = 0;
        for(let i = 0; i < n; i++) {
            [dp2, dp1] = [dp1, 
                Math.max(nums[i] + dp2, dp1)
            ];
        }
        return dp1;
    }
}
