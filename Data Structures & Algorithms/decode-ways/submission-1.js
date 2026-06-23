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
        let dp1 = 1, dp2 = 1;
        for(let i = 0; i < s.length; i++) {
            const one = isValid(s[i]) ? dp1 : 0;
            const two = isValid(s[i-1] + s[i]) ? dp2 : 0;
            [dp1, dp2] = [one + two, dp1];
        }
        return dp1;
    }
}

