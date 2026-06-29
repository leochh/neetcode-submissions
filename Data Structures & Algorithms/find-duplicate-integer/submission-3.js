class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const n = nums.length;
        const seen = Array(n).fill(false);
        for(const n of nums) {
            if(seen[n]) return n;
            seen[n] = true;
        }
    }
}
