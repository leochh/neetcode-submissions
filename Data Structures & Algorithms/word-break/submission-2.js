class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const memo = Array(n).fill(null);
        const wordSet = new Set(wordDict);

        const dfs = i => {
            if(i === n) return true;
            if(memo[i]!==null) return memo[i];
            for(let j = i + 1; j <= n; j++) {
                const str = s.substring(i, j);
                if(wordSet.has(str) && dfs(j)) {
                    memo[i] = true;
                    return true;
                }
            }
            memo[i] = false;
            return false;
        }

        return dfs(0)
    }
}
