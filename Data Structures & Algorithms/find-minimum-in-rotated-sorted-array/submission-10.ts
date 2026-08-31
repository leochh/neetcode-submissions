class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const n = nums.length;
        let l = 0, r = n;
        while(l < r) {
            const m = l + Math.floor((r - l) / 2);
            // find 1st <= nums[0]
            if(nums[m] < nums[0]) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l === n ? nums[0] : nums[l];
    }
}
