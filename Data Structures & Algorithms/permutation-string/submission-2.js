class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freq = {};
        for(const c of s1) {
            freq[c] = (freq[c] || 0) + 1;
        }
        const required = Object.keys(freq).length;
        const window = {};
        let l = 0, r = 0;
        let match = 0;
        while(r < s2.length) {
            const c = s2[r];
            if(freq[c]) {
                window[c] = (window[c] || 0) + 1;
                if (window[c] === freq[c]) match++;
            }
            if(r - l + 1 === s1.length) {
                if(match === required) return true;
                const c = s2[l++];
                if(freq[c] && window[c] === freq[c]) match--;
                window[c]--;
            }
            r++;
        }
        return false;
    }
}
