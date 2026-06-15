class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /* binary search */
        let l = 0, r = nums.length;
        while(l < r) {
            const m = l + Math.floor((r-l)/2);
            if(nums[m] >= nums[0]) {
                l = m+1;
            } else {
                r = m;
            }
        }
        return l >= nums.length ? nums[0] : nums[l];
    }
}
