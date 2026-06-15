class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        `/ 
          |/
        
        `
        const n = nums.length;
        let l = 0, r = n - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;
            if(nums[m] >= nums[l]) {
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target <= nums[r] && target > nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}
