class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const n = nums.length;
        nums.sort((a, b) => a - b);

        const res = [];
        const track = [];

        const backtrack = (start) => {
            res.push([...track]);
            for(let i = start; i < n; i++) {
                if(i > start && nums[i] === nums[i-1]) continue;
                track.push(nums[i]);
                backtrack(i + 1);
                track.pop();
            }
        }
        backtrack(0);
        return res;
    }
}
