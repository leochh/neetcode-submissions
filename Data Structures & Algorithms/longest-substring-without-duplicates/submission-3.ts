class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const freq = {};
        let l = 0, r = 0, max = 0;
        while(r < s.length) {
            const c = s[r];
            freq[c] = (freq[c] || 0) + 1;
            while(freq[c] > 1) {
                const out = s[l++];
                freq[out]--;
            }
            max = Math.max(max, r - l + 1);
            r++;
        }
        return max;
    }
}
