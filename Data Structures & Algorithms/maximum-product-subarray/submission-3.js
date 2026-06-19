class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let min = 1, max = 1;
        let res = nums[0];

        for(const num of nums) {
            const values = [min * num, max * num, num];
            min = Math.min(...values);
            max = Math.max(...values);
            res = Math.max(res, max);
        }
        return res;
    }
}
