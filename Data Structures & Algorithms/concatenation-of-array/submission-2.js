class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const res = Array(n * 2).fill(0);
        for(let i = 0; i < n; i++) {
            res[i] = nums[i];
            res[i+n] = nums[i];
        }
        return res;
    }
}
