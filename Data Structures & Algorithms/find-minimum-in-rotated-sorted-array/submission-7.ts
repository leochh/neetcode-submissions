class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const n = nums.length;
        let l = 0, r = nums.length - 1;
        while(l < r) {
            const mid = l + Math.floor((r - l) / 2);
            if(nums[mid] <= nums[r]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return nums[l];
    }
}
