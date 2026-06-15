class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        /* prefix sum */
        const n = nums.length;
        const sum = Array(n + 1).fill(0);
        let min = 0;
        let max = -Infinity;
        for(let i = 1; i <=n; i++) {
            sum[i] = nums[i-1] + sum[i-1];
            max = Math.max(max, sum[i] - min);
            min = Math.min(min, sum[i]);
        }
        return max;
    }
}
