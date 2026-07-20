class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        // lower bound -> first idx num >= target
        const n  = nums.length;
        let l = 0, r = n;
        while(l < r) {
            const mid = l + Math.floor((r - l) / 2);
            if(nums[mid] >= target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
