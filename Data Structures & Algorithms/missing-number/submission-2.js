class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        let sum = n * (n + 1) / 2;
        for(const x of nums) {
            sum -= x;
        }
        return sum;
    }
}
