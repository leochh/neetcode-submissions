class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort((a, b) => a - b);
        return nums.some((v, i) => i > 0 && nums[i] === nums[i-1]);
    }
}
