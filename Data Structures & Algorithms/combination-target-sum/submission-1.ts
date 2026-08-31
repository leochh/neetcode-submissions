class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];
        const track = [];
        let sum = 0;

        const backtrack = (start) => {
            if(sum >= target) {
                if(sum === target) res.push([...track]);
                return;
            }
            for(let i = start; i < nums.length; i++) {
                track.push(nums[i]);
                sum += nums[i];
                backtrack(i);
                track.pop();
                sum -= nums[i];
            }
        }
        backtrack(0);
        return res;
    }
}
