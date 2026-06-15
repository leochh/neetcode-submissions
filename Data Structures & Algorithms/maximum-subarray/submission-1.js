class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        /* prefix sum */
        const n = nums.length;
        let min = 0;
        let max = -Infinity;
        let sum = 0;
        for(let i = 0; i <n; i++) {
            sum += nums[i];
            max = Math.max(max, sum - min);
            min = Math.min(min, sum);
        }
        return max;
    }
}
