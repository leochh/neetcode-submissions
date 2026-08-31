class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const n = nums.length;
        const used = Array(n).fill(false);

        const res = [];
        const track = [];
        const backtrack = () => {
            if(track.length === n) {
                res.push([...track]);
                return;
            }
            for(let i = 0; i < n; i++) {
                if(used[i]) continue;
                track.push(nums[i]);
                used[i] = true;
                backtrack();
                track.pop();
                used[i] = false;
            }
        }
        backtrack();
        return res;
    }
}
