class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let [maxSum, sum] = [-Infinity, -Infinity];
        for(const n of nums) {
            sum = sum > 0 ? sum + n : n;
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }
}
