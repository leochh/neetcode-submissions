class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        const n = nums.length;
        // first idx x >= target
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
            return l < n && nums[l] === target ? l : -1;
        }

        // last idx x <= target
        const upperBound = () => {
            let l = 0, r = n;
            while(l < r) {
                const mid = l + Math.ceil((r - l) / 2);
                if(nums[mid] <= target) {
                    l = mid;
                } else {
                    r = mid - 1;
                }
            }
            return r >= 0 && nums[r] === target ? r : -1;
        }

        return [lowerBound(), upperBound()];
    }
}
