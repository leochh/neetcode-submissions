class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let l = 0, r = 0, res = 0;
        while(r < s.length) {
            if(map.has(s[r])) {
                l = Math.max(l, map.get(s[r]) + 1);
            }
            map.set(s[r], r);
            res = Math.max(res, r - l + 1);
            r++;
        }
        return res;
    }
}
