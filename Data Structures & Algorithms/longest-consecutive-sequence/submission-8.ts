class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums.sort((a, b) => a - b);
        let [i, len, maxLen] = [0, 0, 0];
        while(i < nums.length) {
            if(!i) {
                len++;
                maxLen = Math.max(maxLen, len);
            } else if (nums[i] === nums[i-1]) {
            } else if (nums[i] === nums[i-1] + 1) {
                len++;
                maxLen = Math.max(maxLen, len);
            } else {
                len = 1;
            }
            i++;
        }
        return maxLen;
    }
}
