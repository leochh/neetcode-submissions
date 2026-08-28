class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const freq = {};
        for(const c of s) {
            freq[c] = (freq[c] || 0) + 1;
        }
        for(const c of t) {
            freq[c] = (freq[c] || 0) - 1;
            if(freq[c] < 0) return false;
        }
        return true;
    }
}
