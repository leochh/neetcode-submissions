class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        const lower = () => {
            // 1st idx >= target
            let l = 0, r = nums.length;
            while(l < r) {
                const m = l + Math.floor((r - l) / 2);
                if(nums[m] >= target) {
                    r = m;
                } else {
                    l = m + 1;
                }
            }
            return nums[l] === target ? l : -1;
        }

        const upper = () => {
            // last idx <= target
            let l = 0, r = nums.length;
            while(l < r) {
                // [l, m-1] [m, r]
                const m = l + Math.ceil((r - l) / 2); // right biased
                if(nums[m] <= target) { // pass
                    l = m;
                } else {
                    r = m - 1;
                }
            }
            return nums[l] === target ? l : -1;
        }

        return [lower(), upper()];
    }
}
