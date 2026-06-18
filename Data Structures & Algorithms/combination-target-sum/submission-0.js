class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const n = nums.length;
        nums.sort((a, b) => a - b);

        const res = [];
        const track = [];
        let sum = 0;
        const backtrack = (start) => {
            if (sum === target) {
                res.push([...track]);
                return;
            }
            for (let i = start; i < n; i++) {
                if (sum + nums[i] > target) return;
                track.push(nums[i]);
                sum += nums[i];
                backtrack(i);
                track.pop();
                sum -= nums[i];
            }
        };

        backtrack(0);
        return res;
    }
}
