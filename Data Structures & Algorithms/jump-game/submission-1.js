class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        /* greedy */
        const n = nums.length;
        let max = 0;
        for(let i = 0; i < n - 1; i++) {
            max = Math.max(max, i + nums[i]);
            if(max <= i) return false;
        }
        return max >= n-1;
    }
}
