class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        const n = nums.length;
        let [l, r] = [0, n-1];
        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if(nums[m] === target)  return m;

            if(nums[l] <= nums[m]) {
                if(nums[l] <= target && nums[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if(nums[m] < target && nums[r] >= target) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}
