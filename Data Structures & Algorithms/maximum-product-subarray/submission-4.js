class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let prefix = 1;
        let suffix = 1;
        let res = nums[0];

        for (let i = 0; i < n; i++) {
            prefix = nums[i] * (prefix === 0 ? 1 : prefix);
            suffix = nums[n - 1 - i] * (suffix === 0 ? 1 : suffix);
            res = Math.max(res, prefix, suffix);
        }

        return res === -0 ? 0 : res;
    }
}
