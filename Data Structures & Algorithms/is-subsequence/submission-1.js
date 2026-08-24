class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        const m = s.length;
        const n = t.length;
        const memo = Array.from({length: m + 1}, () => Array(n + 1).fill(null));

        const dp = (i, j) => {
            if(i <= 0) return true;
            if(j <= 0) return false;
            if(memo[i][j] !== null) return memo[i][j];
            const res = dp(i, j-1) || s[i - 1] === t[j - 1] && dp(i-1, j-1);
            memo[i][j] = res;
            return res;
        }
        return dp(m, n);
    }
}
