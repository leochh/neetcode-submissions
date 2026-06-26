class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const res = [];
        const track = [];

        const used = Array(n).fill(false);

        const backtrack = () => {
            if(track.length === n) {
                res.push([...track]);
            }
            for(let i = 0; i < n; i++) {
                if(used[i]) continue;
                used[i] = true;
                track.push(nums[i]);
                backtrack();
                track.pop();
                used[i] = false;
            }
        }
        backtrack();
        return res;
    }
}
