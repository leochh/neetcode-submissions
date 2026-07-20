class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        const n = nums.length;
        const lowerBound = () => {
            let l = 0, r = n;
            while(l < r) {
                const mid = l + Math.floor((r - l) / 2);
                if(nums[mid] >= target) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            return l === n || nums[l] !== target ? -1 : l;
        }
        const upperBound = () => {
            let l = 0, r = n;
            while(l < r) {
                const mid = l + Math.floor((r - l) / 2);
                if(nums[mid] > target) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            return l === 0 || nums[l - 1] !== target ? -1 : l - 1;
        }
        return [lowerBound(), upperBound()];
    }
}
