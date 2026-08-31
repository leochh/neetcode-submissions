class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const window = {};
        let l = 0, r = 0, maxLen = 0, max = 0;
        while(r < s.length) {
            const c = s[r++];
            window[c] = (window[c] || 0) + 1;
            max = Math.max(max, window[c]);
            while(r - l - max > k) {
                const out = s[l++];
                window[out]--;
            }
            maxLen = Math.max(maxLen, r - l);
        }
        return maxLen;
    }
}
