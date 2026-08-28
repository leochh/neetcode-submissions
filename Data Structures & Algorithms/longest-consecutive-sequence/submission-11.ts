class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const lenMap = new Map(); // <num, len>

        let maxLen = 0;

        for(const n of nums) {
            if(lenMap.has(n)) continue;
            // ... left] _ [right ...
            const leftLen = lenMap.get(n - 1) || 0;
            const rightLen = lenMap.get(n + 1) || 0;
            const len = leftLen + rightLen + 1;
            lenMap.set(n, len);

            // update edge count
            const leftmost = n - leftLen;
            const rightmost = n + rightLen;
            lenMap.set(leftmost, len);
            lenMap.set(rightmost, len);

            maxLen = Math.max(maxLen, len);
        }

        return maxLen;
    }
}
