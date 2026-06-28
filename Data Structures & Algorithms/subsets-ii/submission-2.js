class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const n = nums.length;
        const res = [];
        const track = [];

        nums.sort((a, b) => a - b);
        const backtrack = (i) => {
            res.push([...track]);
            for(let j = i; j < n; j++) {
                if(j > i && nums[j] === nums[j-1]) {
                    continue;
                }
                track.push(nums[j]);
                backtrack(j + 1);
                track.pop();
            }
        }
        backtrack(0);
        return res;
    }
}
