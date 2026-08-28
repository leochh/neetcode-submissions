class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const lenMap = new Map();
        let longest = 0;
        for(const n of nums) {
            if(lenMap.has(n)) continue;
            const left = lenMap.get(n-1) || 0;
            const right = lenMap.get(n+1) || 0;
            const count = left + right + 1;
            const leftmost = n - left;
            const rightmost = n + right;
            [n, leftmost, rightmost].forEach(x => lenMap.set(x, count));
            longest = Math.max(longest, count);
        }
        return longest;
    }
}