class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(!nums.length) return -1;
        // nums is sorted, ascending
        let l=0, r=nums.length-1;
        const m = Math.floor((l+r)/2);
        const v = nums[m];
        if (v === target) {
            return m;
        } else if (v > target) {
            // search left side
            return this.search(nums.slice(0, m), target);
        } else {
            // v < target => search right
            const res =  this.search(nums.slice(m+1), target);
            return res === -1 ? -1 : res + m + 1;
        }
    }
}
