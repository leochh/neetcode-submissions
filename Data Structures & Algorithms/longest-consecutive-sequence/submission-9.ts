class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums.sort((a, b) => a - b);
        let [len, maxLen] = [0, 0];
        for(let i = 0; i < nums.length; i++) {
            if(!i || nums[i] === nums[i-1] + 1) {
                len++;
                maxLen = Math.max(maxLen, len);
            } else if (nums[i] === nums[i-1]) {
                // do nothing
            } else {
                len = 1;
            }
        }
        return maxLen;
    }
}
