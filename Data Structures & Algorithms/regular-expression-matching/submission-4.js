class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const m = s.length, n = p.length;
        const memo = Array.from({length: m+1}, () => Array(n+1).fill(null));

        const backtrack = (i, j) => {
            if (memo[i][j] !== null) return memo[i][j];

            if (j === n) return memo[i][j] = (i === m);

            const firstMatch = (i < m && (s[i] === p[j] || p[j] === '.'));

            if (j+1 < n && p[j+1] === '*') {
                // either skip "x*" or use it if firstMatch
                memo[i][j] = backtrack(i, j+2) || (firstMatch && backtrack(i+1, j));
            } else {
                memo[i][j] = firstMatch && backtrack(i+1, j+1);
            }
            return memo[i][j];
        };

        return backtrack(0, 0);
    }
}

