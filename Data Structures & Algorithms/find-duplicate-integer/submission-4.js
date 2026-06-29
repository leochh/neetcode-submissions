class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i = 0; i < nums.length; i++) {
            const n = Math.abs(nums[i]);
            if(nums[n] < 0) return n;
            nums[n] = -nums[n];
        }
    }
}
