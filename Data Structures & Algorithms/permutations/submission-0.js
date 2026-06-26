class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const res = [];

        const backtrack = (s) => {
            if (s === n) {
                res.push([...nums]); // copy current permutation
                return;
            }
            for (let i = s; i < n; i++) {
                [nums[i], nums[s]] = [nums[s], nums[i]]; // choose
                backtrack(s + 1);
                [nums[i], nums[s]] = [nums[s], nums[i]]; // undo
            }
        };

        backtrack(0);
        return res;
    }
}

