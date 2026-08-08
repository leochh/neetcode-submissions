class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if(nums[m] === target) return true;
            if(nums[l] === nums[m] && nums[r] === nums[m]) {
                l++;
                r--;
            } else if(nums[l] <= nums[m]) {
                if(nums[l] <= target && target < nums[m]) r = m - 1;
                else l = m + 1;
            } else {
                if(nums[r] >= target && target > nums[m]) l = m + 1;
                else r = m - 1;
            }
        }
        return false;
    }
}
