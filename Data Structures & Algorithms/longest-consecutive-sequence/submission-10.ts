class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let maxLen = 0;
        for(const n of nums) {
            if(set.has(n-1)) continue;
            let len = 1;
            while(set.has(n + len)) len++;
            maxLen = Math.max(maxLen, len);
        }
        return maxLen;
    }
}
