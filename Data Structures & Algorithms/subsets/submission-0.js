class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const track = [];
        const n = nums.length;

        const backtrack = (i) => {
            if(i === n) {
                res.push([...track]);
                return;
            }
            backtrack(i + 1);
            track.push(nums[i]);
            backtrack(i + 1);
            track.pop();
        }

        backtrack(0);
        return res;
    }
}
