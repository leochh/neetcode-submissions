class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const map = {};
        const window = {};

        for (const c of t) {
            map[c] = (map[c] || 0) + 1;
        }
        let need = Object.keys(map).length;
        let match = 0;
        let l = 0,
            r = 0;
        let res = "";
        while (r < s.length) {
            const add = s[r++];
            if (map[add]) {
                window[add] = (window[add] || 0) + 1;
                if (window[add] === map[add]) match++;
            }
            while(match === need) {
                if(!res || r - l < res.length) res = s.substring(l, r);
                const out = s[l++];
                if(map[out]) {
                    if(window[out] === map[out]) match--;
                    window[out]--;
                }
            }
        }
        return res;
    }
}
