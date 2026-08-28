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

            // update edge count
            const left = n - leftLen;
            const right = n + rightLen;

            [n, left, right].forEach(v => lenMap.set(v, len));
            maxLen = Math.max(maxLen, len);
        }

        return maxLen;
    }
}
