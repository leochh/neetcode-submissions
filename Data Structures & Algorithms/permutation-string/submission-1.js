class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const need = {};
        for (const c of s1) {
            need[c] = (need[c] || 0) + 1;
        }
        const required = Object.keys(need).length;

        // sliding window
        const window = {};
        let l = 0,
            r = 0,
            valid = 0;

        while (r < s2.length) {
            const c = s2[r++];
            if (need[c]) {
                window[c] = (window[c] || 0) + 1;
                if (window[c] === need[c]) {
                    valid++;
                }
            }

            // shrink window to make condition met
            if (r - l === s1.length) {
                if (valid === required) {
                    return true;
                }
                const d = s2[l++];
                if (need[d]) {
                    if (window[d] === need[d]) {
                        valid--;
                    }
                    window[d]--;
                }
            }
        }
        return false;
    }
}
