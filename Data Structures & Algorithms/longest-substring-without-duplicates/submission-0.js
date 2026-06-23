class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Set();
        let l = 0, r = 0;
        let res = 0;
        while(r < s.length) {
            while(chars.has(s[r])) {
                chars.delete(s[l++]);
            }
            chars.add(s[r]);
            res = Math.max(res, r - l + 1);
            r++;
        }
        return res;
    }
}
