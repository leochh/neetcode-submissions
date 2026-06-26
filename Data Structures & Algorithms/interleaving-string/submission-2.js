class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        // ith in s1, jth in s2
        const m = s1.length,
            n = s2.length;
        if(s3.length !== m + n) return false;
        const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(null));
        const backtrack = (i, j) => {
            if(i === m && j === n) return true;
            if (i > m || j > n) return false;
            if (memo[i][j] !== null) return memo[i][j];
            const res = s1[i]===s3[i+j] && backtrack(i+1, j) || s2[j]===s3[i+j] && backtrack(i, j+1);
            memo[i][j] = res;
            return res;
        };
        return backtrack(0, 0);
    }
}
