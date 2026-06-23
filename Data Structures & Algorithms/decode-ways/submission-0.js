class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const isValid = str => {
            const val = +str;
            if(str.length === 2) {
                return val <= 26 && val >= 10;
            }
            return val <= 9 && val >= 1;
        }
        const n = s.length;
        const dp = Array(n + 2).fill(0);
        dp[0] = dp[1] = 1;
        for(let i = 2; i < dp.length; i++) {
            const idx = i - 2;
            const one = isValid(s[idx]) ? dp[i-1] : 0;
            const two = isValid(s[idx-1] + s[idx]) ? dp[i-2] : 0;
            dp[i] = one + two;
        }
        return dp.at(-1);
    }
}
