class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        // find 1st pos >= target
        // [l, m] [m+1, r]
        let l = 0, r = nums.length;
        while(l < r) {
            const m = l + Math.floor((r - l)/2);
            if(nums[m] >= target) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}
