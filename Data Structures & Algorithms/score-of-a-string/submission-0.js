class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let res = 0;
        let prev = s.charCodeAt(0);
        for(let i = 1; i < s.length; i++) {
            const cur = s.charCodeAt(i);
            res += Math.abs(cur - prev);
            prev = cur;
        }
        return res;
    }
}
