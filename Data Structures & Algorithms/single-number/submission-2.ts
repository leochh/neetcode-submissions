class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let res = 0;
        for(const n of nums) {
            res ^= n;
        }
        return res;
    }
}
