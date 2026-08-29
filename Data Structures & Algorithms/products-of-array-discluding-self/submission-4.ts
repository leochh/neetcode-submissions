class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        let prefix = [1];
        let suffix = [1];

        for(let i = 0; i < nums.length; i++) {
            prefix.push(prefix.at(-1) * nums[i]);
            suffix.push(suffix.at(-1) * nums[n-1-i]);
        }
        const res = [];
        for(let i = 0; i < nums.length; i++) {
            res.push(prefix[i] * suffix[n-1-i]);
        }
        return res;
    }
}
