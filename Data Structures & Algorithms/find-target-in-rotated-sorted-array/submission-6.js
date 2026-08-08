class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if(nums[m] === target) return m;
            if(nums[l] <= nums[m]) {
                // left is ordered
                if(nums[l] <= target && target < nums[m]) r = m - 1;
                else l = m + 1;
            } else {
                // right is ordered
                if(nums[r] >= target && target > nums[m]) l = m + 1;
                else r = m - 1;
            }
        }
        return -1;
    }
}
