class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        const minDp = [...nums];
        const maxDp = [...nums];

        let max = nums[0];
        for (let i = 1; i < n; i++) {
            const values = [minDp[i-1] * nums[i], maxDp[i-1] * nums[i], nums[i]];
            minDp[i] = Math.min(...values);
            maxDp[i] = Math.max(...values);
            max = Math.max(max, maxDp[i]);
        }
        return max;
    }
}
