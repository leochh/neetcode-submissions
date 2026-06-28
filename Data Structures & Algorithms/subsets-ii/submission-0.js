class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const n = nums.length;
        const res = [];
        const track = [];
        const used = Array(n).fill(false);

        const backtrack = (i) => {
            if(i === n) {
                res.push([...track]);
                return;
            }
            backtrack(i+1);
            if(nums[i-1] === nums[i] && !used[i-1]) return;
            track.push(nums[i]);
            used[i] = true;
            backtrack(i + 1);
            track.pop();
            used[i] = false;
        }
        backtrack(0);
        return res;
    }
}
