class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        /* two pointers */
        let res = 0;
        const n = s.length;
        const count = (i, j) => {
            while(i >= 0 && j < n && s[i] === s[j]) {
                i--;
                j++;
                res++;
            }
        }
        for(let i = 0; i < n; i++) {
            count(i, i);
            count(i, i+1);
        }
        return res;
    }
}
