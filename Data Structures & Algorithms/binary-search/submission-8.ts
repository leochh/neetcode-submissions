class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let n = nums.length;
        let l = 0, r = n - 1;
        while(l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            if(nums[m] > target) {
                r = m - 1;
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                return m;
            }
        }
        return -1;
    }
}
