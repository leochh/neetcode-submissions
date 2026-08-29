class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const n = nums.length;
        let xor = n;
        for(let i = 0; i < n; i++) {
            xor ^= i ^ nums[i];
        }
        return xor;
    }
}
