class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const m = s.length, n = p.length;
        let matched = false;
        const memo = Array.from({length : m + 1}, () => Array(n + 1).fill(null));
        const backtrack = (i, j) => {
            if(memo[i][j] !== null) {
                return memo[i][j];
            }
            if(i === m) {
                if(j === n || j === n - 2 && p.endsWith('*')) matched = true;
                else memo[i][j] = false;
                return;
            }
            if (matched) return;
            const char = s[i], token = p[j], mod = p[j+1];
            let res = false;
            if(mod === '*') {
                // skip token
                res = res || backtrack(i, j + 2);
            }
            if(char === token || token === '.') {
                // direct match
                res = res || backtrack(i + 1, j + 1);
                if (mod === '*') {
                    // repeat token
                    res = res || backtrack(i + 1, j);
                    // match exactly once
                    res = res || backtrack(i + 1, j + 2);
                }
            }
            memo[i][j] = res;
        }
        backtrack(0, 0);
        return matched;
    }
}
