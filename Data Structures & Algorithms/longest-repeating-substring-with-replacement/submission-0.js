class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const window = {};
        let l = 0, r = 0;
        let max = 0, res = 0;
        while(r < s.length) {
            window[s[r]] = (window[s[r]] || 0) + 1;
            max = Math.max(max, window[s[r]]);

            while(r - l + 1 - max > k) {
                window[s[l++]]--;
            }
            res = Math.max(res, r - l + 1);
            r++;
        }
        return res;
    }
}
